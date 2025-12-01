#!/usr/bin/env node
/**
 * Create a new blog post markdown file with basic frontmatter.
 * Usage: node scripts/newPost.js <slug> [title] [description]
 */
import fs from 'fs';
import path from 'path';

const [slugArg, titleArg, descriptionArg] = process.argv.slice(2);

if (!slugArg) {
	console.error('Usage: node scripts/newPost.js <slug> [title] [description]');
	process.exit(1);
}

const slug = slugArg.trim().replace(/\s+/g, '-').toLowerCase();
const title = titleArg?.trim() || slugArg;
const description = descriptionArg?.trim() || '記事の説明をここに書く';

const dateISO = new Date().toISOString().slice(0, 10);
const targetPath = path.join(process.cwd(), 'src', 'content', 'blog', `${slug}.md`);

if (fs.existsSync(targetPath)) {
	console.error(`File already exists: ${targetPath}`);
	process.exit(1);
}

const frontmatter = `---
author: jarinosuke
datetime: '${dateISO}'
title: ${JSON.stringify(title)}
slug: ${JSON.stringify(slug)}
featured: false
draft: true
tags: []
description: ${JSON.stringify(description)}
---

ここに本文を書き始めてください。
`;

fs.writeFileSync(targetPath, frontmatter, 'utf8');
console.log(`Created: ${path.relative(process.cwd(), targetPath)}`);
