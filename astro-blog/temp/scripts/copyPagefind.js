import fs from "fs";
import path from "path";

const source = path.join(process.cwd(), "node_modules/pagefind/pagefind.js");
const dest = path.join(process.cwd(), "public/pagefind/pagefind.js");

// Create directory if it doesn't exist
const destDir = path.dirname(dest);
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy the file if source exists
if (fs.existsSync(source)) {
  fs.copyFileSync(source, dest);
  console.log("Pagefind script copied successfully");
} else {
  console.log("Pagefind source not found, skipping copy");
}