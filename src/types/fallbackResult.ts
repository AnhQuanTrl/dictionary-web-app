import { z } from "zod";

export const fallbackResultSchema = z.object({
  title: z.string(),
  message: z.string(),
  resolution: z.string(),
});

export type FallbackResult = z.infer<typeof fallbackResultSchema>;
