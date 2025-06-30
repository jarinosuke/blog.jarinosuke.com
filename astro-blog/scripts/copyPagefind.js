// ABOUTME: This script copies Pagefind search files to the public directory
// ABOUTME: It ensures search functionality works properly after build

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, '../dist/pagefind');
const targetDir = path.join(__dirname, '../public/pagefind');

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy pagefind files
if (fs.existsSync(sourceDir)) {
  fs.cpSync(sourceDir, targetDir, { recursive: true });
  console.log('✓ Pagefind files copied to public directory');
} else {
  console.log('⚠ Pagefind directory not found in dist');
}