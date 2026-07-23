export async function runSocialAgent(payload: { topic: string; tone: string }) {
  return {
    post: `🚀 ${payload.topic} is changing how we build products.\n` +
      `Here’s why multi-agent constellations matter.`
  };
}
