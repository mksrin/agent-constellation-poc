import { readJson } from "../core/jsonStore";

export async function runEvaluatorAgent(output: any) {
  const policies = readJson<{ blocked_words: string[] }>("config/policies.json");
  const text = JSON.stringify(output).toLowerCase();
  const blocked = policies.blocked_words.find(w => text.includes(w.toLowerCase()));
  if (blocked) {
    return { ok: false, reason: `Contains blocked word: ${blocked}` };
  }
  return { ok: true };
}
