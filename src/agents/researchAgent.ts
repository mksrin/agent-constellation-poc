export async function runResearchAgent(payload: { topic: string }) {
  // POC: fake research result
  return {
    topic: payload.topic,
    facts: [
      "AI agents can be orchestrated as a constellation.",
      "JSON can be used as a lightweight storage layer."
    ]
  };
}
