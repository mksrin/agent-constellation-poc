import { readJson } from "../core/jsonStore";

export async function runWritingAgent(payload: { topic: string; tone: string }) {
  const brand = readJson<{ persona: string }>("memory/brand_voice.json");
  return {
    text: `In a ${payload.tone} tone, aligned with "${brand.persona}", ` +
      `here's a short explanation of ${payload.topic}.`
  };
}
