import {
  cp,
  mkdir,
  readdir,
  rm
} from "node:fs/promises";
import path from "node:path";
import {
  loadConfig,
  projectRoot,
  targetDirectory
} from "./graphify-artifacts.mjs";

const outputDirectory = path.join(projectRoot, "dist");
const config = await loadConfig();

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

for (const entry of ["index.html", "portal.html", "README.md", "docs"]) {
  await cp(
    path.join(projectRoot, entry),
    path.join(outputDirectory, entry),
    { recursive: true }
  );
}

for (const repository of config.repositories) {
  const sourceDirectory = targetDirectory(repository);
  const destinationDirectory = path.join(
    outputDirectory,
    repository.id,
    "graphify-out"
  );
  await mkdir(destinationDirectory, { recursive: true });

  const entries = await readdir(sourceDirectory);
  for (const fileName of [...config.requiredFiles, ...config.optionalFiles]) {
    if (!entries.includes(fileName)) {
      continue;
    }
    await cp(
      path.join(sourceDirectory, fileName),
      path.join(destinationDirectory, fileName)
    );
  }
}

console.log(`Static build created at ${outputDirectory}`);
