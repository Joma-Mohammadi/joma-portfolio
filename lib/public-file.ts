import fs from "node:fs";
import path from "node:path";

/** Server-only: true when `urlPath` (e.g. "/images/x.png") exists in /public. */
export function publicFileExists(urlPath: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", urlPath));
  } catch {
    return false;
  }
}
