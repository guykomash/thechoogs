import { defineCollection } from "astro:content";
import { glob } from "astro/loaders"; // Not available with legacy API
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      isHebTitle: z.boolean().optional(),
      description: z.string(),
      publishDate: z.coerce.date(),
      coverImage: image(),
    }),
});

export const collections = { posts };
