import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const issues = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/issues" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
});

const calendar = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/calendar" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().optional(),
    date: z.coerce.date(),
    location: z.string().optional(),
    endDate: z.coerce.date().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    highlight: z.boolean().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    topClicks: z.array(z.object({
      issue: z.union([z.number(), z.string()]),
      clicks: z.array(z.string()),
    })).optional(),
  }),
});

export const collections = { issues, calendar, pages };
