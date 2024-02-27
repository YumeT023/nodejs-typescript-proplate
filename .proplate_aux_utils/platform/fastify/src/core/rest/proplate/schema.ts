import z from "zod";
import {inferTypeFromSchemaRecord} from "../../util/zod_util";

/* Keep the operations [idempotent](https://en.wikipedia.org/wiki/Idempotence) */
export const ProplateDto = {
  ["proplate.crupdate"]: z.object({
    id: z.string().min(21),
    name: z.string().min(4),
    description: z.string().min(10),
  }),
};

export type ProplateDto = inferTypeFromSchemaRecord<typeof ProplateDto>;

// access both types and schema like this ProplateDto["crupdateProplateDto"]
// notice the name for schema & type are identical, Typescript will refer to them as type/value depending on the ctx
