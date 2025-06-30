// ABOUTME: This script migrates blog post frontmatter from old format to AstroPaper format
// ABOUTME: It converts pubDate to datetime, adds author and draft fields, and standardizes the format

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogDir = path.join(__dirname, '../src/content/blog');

// Get all markdown files
const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md') || file.endsWith('.mdx'));

console.log(`Found ${files.length} blog posts to migrate`);

files.forEach(file => {
  const filePath = path.join(blogDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content: markdownContent } = matter(content);
  
  // Convert frontmatter to AstroPaper format
  const newFrontmatter = {
    author: 'jarinosuke',
    datetime: frontmatter.pubDate || new Date().toISOString(),
    title: frontmatter.title,
    slug: file.replace(/\.(md|mdx)$/, ''),
    featured: false,
    draft: false,
    tags: frontmatter.tags || [],
    description: frontmatter.description || '',
  };
  
  // Add optional fields if they exist
  if (frontmatter.updatedDate) {
    newFrontmatter.modDatetime = frontmatter.updatedDate;
  }
  
  if (frontmatter.heroImage) {
    newFrontmatter.ogImage = frontmatter.heroImage;
  }
  
  // Create new content with updated frontmatter
  const newContent = matter.stringify(markdownContent, newFrontmatter);
  
  // Write back to file
  fs.writeFileSync(filePath, newContent);
  
  console.log(`✓ Migrated: ${file}`);
});

console.log('\nMigration complete!');