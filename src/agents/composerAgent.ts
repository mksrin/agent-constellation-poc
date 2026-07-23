export async function runComposerAgent(intermediate: any) {
  if (intermediate.post) return intermediate.post;
  if (intermediate.text) return intermediate.text;
  return JSON.stringify(intermediate, null, 2);
}
