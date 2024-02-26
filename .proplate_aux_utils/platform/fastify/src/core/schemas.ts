import {ProplateDto} from "./proplate";
import {buildJsonSchemas} from "fastify-zod";

// Use $ref and schemas for req body/query validations
// provide all your schemas with the same structure as the below example
export const {
  schemas, \$ref
} = buildJsonSchemas({
  ...ProplateDto,
})
