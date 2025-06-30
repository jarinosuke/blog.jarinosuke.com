import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { SITE } from "@config";

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ 
		base: './src/content/blog', 
		pattern: '**/*.{md,mdx}',
		generateId: ({ entry }) => {
			// Generate slug from filename without extension
			return entry.replace(/\.(md|mdx)$/, '');
		}
	}),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		author: z.string().default(SITE.author),
		datetime: z.coerce.date(),
		modDatetime: z.coerce.date().optional().nullable(),
		title: z.string(),
		slug: z.string().optional(),
		featured: z.boolean().optional(),
		draft: z.boolean().optional(),
		tags: z.array(z.string()).default([]),
		description: z.string(),
		ogImage: image()
			.refine(img => img.width >= 1200 && img.height >= 630, {
				message: "OpenGraph image must be at least 1200 X 630 pixels!",
			})
			.or(z.string())
			.optional(),
		canonicalURL: z.string().optional(),
		editPost: z
			.object({
				disabled: z.boolean().optional(),
				url: z.string().optional(),
				text: z.string().optional(),
				appendFilePath: z.boolean().optional(),
			})
			.optional(),
	}),
});

export const collections = { blog };
