export type AgentConfig = {
  name: string;
  description: string;
  inputs: string[];
  outputs: string[];
  tools: string[];
  prompt: string;
};

export type Task = {
  id: string;
  type: string;
  agent: string;
  payload: any;
  status: "pending" | "running" | "done" | "error";
};
