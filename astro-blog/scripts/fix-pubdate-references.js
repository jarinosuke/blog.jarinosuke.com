// ABOUTME: This script updates all references from pubDate to datetime in template files
// ABOUTME: It's needed after migrating blog frontmatter to AstroPaper format

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = [
  '../src/pages/index.astro',
  '../src/pages/blog/index.astro',
  '../src/pages/posts/index.astro',
  '../src/pages/tags/[tag].astro',
  '../src/layouts/BlogPost.astro',
  '../src/pages/blog/[...slug].astro',
  '../src/pages/posts/[...slug].astro'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace pubDate with datetime
    content = content.replace(/\.data\.pubDate/g, '.data.datetime');
    content = content.replace(/date={post\.data\.pubDate}/g, 'date={post.data.datetime}');
    content = content.replace(/date={data\.pubDate}/g, 'date={data.datetime}');
    content = content.replace(/pubDate:/g, 'datetime:');
    
    // Replace updatedDate with modDatetime
    content = content.replace(/\.data\.updatedDate/g, '.data.modDatetime');
    content = content.replace(/date={data\.updatedDate}/g, 'date={data.modDatetime}');
    content = content.replace(/updatedDate:/g, 'modDatetime:');
    
    fs.writeFileSync(filePath, content);
    console.log(`✓ Fixed: ${file}`);
  } catch (error) {
    console.log(`✗ Skipped: ${file} (${error.message})`);
  }
});

console.log('\nReference updates complete!');