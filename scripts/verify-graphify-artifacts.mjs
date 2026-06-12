import { verifyArtifacts } from "./graphify-artifacts.mjs";

try {
  const results = await verifyArtifacts();
  for (const result of results) {
    console.log(`${result.id}: ${result.nodes} nodes, ${result.links} links`);
  }
  console.log(`Verified Graphify artifacts for ${results.length} repositories.`);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
