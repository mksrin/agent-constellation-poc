import { readJson, writeJson } from "./jsonStore";
import { Task } from "./types";
import { runResearchAgent } from "../agents/researchAgent";
import { runWritingAgent } from "../agents/writingAgent";
import { runSocialAgent } from "../agents/socialAgent";
import { runEvaluatorAgent } from "../agents/evaluatorAgent";
import { runComposerAgent } from "../agents/composerAgent";

export async function runNextTask() {
  const queue = readJson("tasks/queue.json") as Task[];
  const task = queue.find(t => t.status === "pending");

  if (!task) {
    console.log("No pending tasks.");
    return;
  }

  task.status = "running";
  writeJson("tasks/queue.json", queue);

  let intermediate: any;

  switch (task.agent) {
    case "research_agent":
      intermediate = await runResearchAgent(task.payload);
      break;
    case "writing_agent":
      intermediate = await runWritingAgent(task.payload);
      break;
    case "social_agent":
      intermediate = await runSocialAgent(task.payload);
      break;
    default:
      console.log("Unknown agent:", task.agent);
      task.status = "error";
      writeJson("tasks/queue.json", queue);
      return;
  }

  const evalResult = await runEvaluatorAgent(intermediate);
  if (!evalResult.ok) {
    console.log("Evaluator rejected output:", evalResult.reason);
    task.status = "error";
    writeJson("tasks/queue.json", queue);
    return;
  }

  const final = await runComposerAgent(intermediate);
  console.log("\n=== FINAL OUTPUT ===\n");
  console.log(final);

  task.status = "done";
  writeJson("tasks/queue.json", queue);
}
