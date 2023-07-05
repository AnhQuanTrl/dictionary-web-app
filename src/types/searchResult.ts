import { z } from "zod";

const phonetic = z.object({
  text: z.string().optional(),
  audio: z.union([z.string().url().nullish(), z.literal("")]),
});

const definition = z.object({
  definition: z.string(),
  example: z.string().optional(),
});

const meaning = z.object({
  partOfSpeech: z.string(),
  definitions: z.array(definition),
  synonyms: z.array(z.string()),
});

export const searchResultSchema = z
  .object({
    word: z.string(),
    phonetics: z.array(phonetic),
    sourceUrls: z.array(z.string()),
    meanings: z.array(meaning),
  })
  .transform((val) => ({
    word: val.word,
    meanings: val.meanings,
    sourceUrls: val.sourceUrls,
    phonetics: val.phonetics.filter(
      (
        p,
      ): p is {
        text: string;
        audio: string;
      } => !!p.text && !!p.audio,
    ),
  }));

export type Meaning = z.infer<typeof meaning>;
export type SearchResult = z.infer<typeof searchResultSchema>;
