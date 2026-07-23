import { runNextTask } from "./core/orchestrator";

async function main() {
  console.log("Running Agent Constellation POC...");
  await runNextTask();
}

main().catch(err => console.error(err));
