import { syncArtifacts } from "./graphify-artifacts.mjs";

try {
  const result = await syncArtifacts();
  console.log(
    `Graphify sync complete: ${result.copied.length} copied, ${result.preserved.length} preserved.`
  );
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
