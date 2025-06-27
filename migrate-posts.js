const fs = require('fs');
const path = require('path');

const hugoContentDir = './content/posts';
const astroContentDir = './astro-blog/src/content/blog';

// Get all markdown files from Hugo content directory
const markdownFiles = fs.readdirSync(hugoContentDir).filter(file => file.endsWith('.md'));

console.log(`Found ${markdownFiles.length} markdown files to migrate`);

markdownFiles.forEach(filename => {
  const hugoFilePath = path.join(hugoContentDir, filename);
  const astroFilePath = path.join(astroContentDir, filename);
  
  // Read Hugo markdown file
  const content = fs.readFileSync(hugoFilePath, 'utf8');
  
  // Parse frontmatter and content
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  
  if (!frontmatterMatch) {
    console.log(`Skipping ${filename} - no frontmatter found`);
    return;
  }
  
  const [, frontmatter, bodyContent] = frontmatterMatch;
  
  // Parse Hugo frontmatter
  const frontmatterLines = frontmatter.split('\n');
  const parsedFrontmatter = {};
  
  frontmatterLines.forEach(line => {
    if (line.trim()) {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length > 0) {
        let value = valueParts.join(':').trim();
        
        // Remove quotes if present
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        } else if (value.startsWith("'") && value.endsWith("'")) {
          value = value.slice(1, -1);
        }
        
        // Handle array values (tags)
        if (value.startsWith('[') && value.endsWith(']')) {
          value = value.slice(1, -1).split(',').map(item => 
            item.trim().replace(/['"]/g, '')
          );
        }
        
        parsedFrontmatter[key.trim()] = value;
      }
    }
  });
  
  // Convert to Astro format
  const astroFrontmatter = {
    title: parsedFrontmatter.title || 'Untitled',
    description: `${parsedFrontmatter.title || 'Blog post'}について`,
    pubDate: parsedFrontmatter.date || new Date().toISOString().split('T')[0],
    heroImage: "",
    tags: Array.isArray(parsedFrontmatter.tags) ? parsedFrontmatter.tags : 
          parsedFrontmatter.tags ? [parsedFrontmatter.tags] : []
  };
  
  // Generate Astro markdown content
  const astroContent = `---
title: "${astroFrontmatter.title}"
description: "${astroFrontmatter.description}"
pubDate: "${astroFrontmatter.pubDate}"
heroImage: "${astroFrontmatter.heroImage}"
tags: ${JSON.stringify(astroFrontmatter.tags)}
---

${bodyContent.trim()}`;
  
  // Write to Astro content directory
  fs.writeFileSync(astroFilePath, astroContent);
  console.log(`Migrated: ${filename}`);
});

console.log('Migration completed!');