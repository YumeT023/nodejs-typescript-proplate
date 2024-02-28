import z from "zod";

/* Keep the operations [idempotent](https://en.wikipedia.org/wiki/Idempotence) */
export const ProplateDto = {
  ["proplate.crupdate"]: z.object({
    id: z.string().min(21),
    name: z.string().min(4),
    description: z.string().min(10),
  }),
};
