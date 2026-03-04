import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		date: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
		published: z.boolean().optional(),
		category: z.string().optional(),
		usePlaceholderHeroInList: z.boolean().default(true),
	}),
});

export const collections = { blog };
