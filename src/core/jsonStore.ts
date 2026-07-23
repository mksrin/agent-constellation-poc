import fs from "fs";
import path from "path";

const base = path.join(__dirname, "..", "..", "data");

export function readJson(relPath: string) {
  const full = path.join(base, relPath);
  return JSON.parse(fs.readFileSync(full, "utf8"));
}

export function writeJson(relPath: string, data: any) {
  const full = path.join(base, relPath);
  fs.writeFileSync(full, JSON.stringify(data, null, 2), "utf8");
}
