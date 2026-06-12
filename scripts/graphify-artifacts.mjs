import { constants } from "node:fs";
import {
  access,
  copyFile,
  mkdir,
  readFile,
  stat
} from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
export const projectRoot = path.resolve(scriptDirectory, "..");
const configPath = path.join(projectRoot, "graphify-artifacts.json");

export async function loadConfig() {
  return JSON.parse(await readFile(configPath, "utf8"));
}

function sourceRoots(config) {
  const configuredRoots = (process.env.GRAPHIFY_SOURCE_ROOTS || "")
    .split(path.delimiter)
    .filter(Boolean)
    .map(root => path.resolve(root.replace(/^~(?=$|\/)/, os.homedir())));

  return [
    ...configuredRoots,
    path.join(os.homedir(), "Documents", "antigravity"),
    path.join(os.homedir(), ".graphify", "repos", config.owner)
  ];
}

async function exists(filePath) {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function findSourceDirectory(config, repository) {
  for (const root of sourceRoots(config)) {
    const candidate = path.join(root, repository.source, "graphify-out");
    if (await exists(candidate)) {
      return candidate;
    }
  }
  return null;
}

export function targetDirectory(repository) {
  return path.join(projectRoot, repository.id, "graphify-out");
}

export async function syncArtifacts() {
  const config = await loadConfig();
  const copied = [];
  const preserved = [];
  const missing = [];

  for (const repository of config.repositories) {
    const sourceDirectory = await findSourceDirectory(config, repository);
    const destinationDirectory = targetDirectory(repository);
    await mkdir(destinationDirectory, { recursive: true });

    for (const fileName of [...config.requiredFiles, ...config.optionalFiles]) {
      const sourceFile = sourceDirectory
        ? path.join(sourceDirectory, fileName)
        : null;
      const destinationFile = path.join(destinationDirectory, fileName);

      if (sourceFile && await exists(sourceFile)) {
        await copyFile(sourceFile, destinationFile);
        copied.push(path.relative(projectRoot, destinationFile));
      } else if (await exists(destinationFile)) {
        preserved.push(path.relative(projectRoot, destinationFile));
      } else if (config.requiredFiles.includes(fileName)) {
        missing.push(`${repository.id}/${fileName}`);
      }
    }
  }

  if (missing.length > 0) {
    throw new Error(
      `Missing required Graphify artifacts:\n${missing.map(item => `- ${item}`).join("\n")}`
    );
  }

  return { copied, preserved };
}

export async function verifyArtifacts() {
  const config = await loadConfig();
  const results = [];
  const errors = [];

  for (const repository of config.repositories) {
    const directory = targetDirectory(repository);

    for (const fileName of config.requiredFiles) {
      const filePath = path.join(directory, fileName);
      if (!await exists(filePath)) {
        errors.push(`${repository.id}: missing ${fileName}`);
      }
    }

    const graphPath = path.join(directory, "graph.json");
    if (!await exists(graphPath)) {
      continue;
    }

    try {
      const graph = JSON.parse(await readFile(graphPath, "utf8"));
      if (!Array.isArray(graph.nodes) || !Array.isArray(graph.links)) {
        throw new Error("graph.json must contain nodes and links arrays");
      }

      const graphHtmlSize = (await stat(path.join(directory, "graph.html"))).size;
      const reportSize = (await stat(path.join(directory, "GRAPH_REPORT.md"))).size;
      if (graphHtmlSize === 0 || reportSize === 0) {
        throw new Error("graph.html and GRAPH_REPORT.md must be non-empty");
      }

      results.push({
        id: repository.id,
        nodes: graph.nodes.length,
        links: graph.links.length
      });
    } catch (error) {
      errors.push(`${repository.id}: ${error.message}`);
    }
  }

  if (errors.length > 0) {
    throw new Error(
      `Graphify artifact verification failed:\n${errors.map(item => `- ${item}`).join("\n")}`
    );
  }

  return results;
}
