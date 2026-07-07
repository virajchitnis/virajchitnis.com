import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const profile = defineCollection({
  loader: glob({ pattern: 'profile.md', base: './src/content' }),
  schema: z.object({
    name: z.string(),
    jobTitle: z.string(),
    tagline: z.string(),
    links: z.array(
      z.object({
        label: z.string(),
        url: z.url(),
      })
    ),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.url().optional(),
    order: z.number(),
  }),
});

export const collections = { profile, work };
