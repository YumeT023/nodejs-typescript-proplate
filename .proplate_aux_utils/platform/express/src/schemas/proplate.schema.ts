import z from "zod";
import {nanoid} from "../util/zod_util";

/* Keep the operations [idempotent](https://en.wikipedia.org/wiki/Idempotence) */
export const ProplateDto = {
  ["proplate.crupdate"]: z.object({
    id: nanoid(),
    name: z.string().min(4),
    description: z.string().min(10),
  }),
};
