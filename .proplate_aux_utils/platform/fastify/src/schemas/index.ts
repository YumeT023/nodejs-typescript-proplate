import {inferTypeFromSchemaRecord} from "../../../express/src/util/zod_util";
import {ProplateDto} from "./proplate.schema";
import {buildJsonSchemas} from "fastify-zod";

// Use $ref and schemas for req body/query validations
// provide all your schemas with the same structure as the below example
export const {schemas, $ref} = buildJsonSchemas({
  ...ProplateDto,
});

export type $ref = inferTypeFromSchemaRecord<
  typeof ProplateDto
  // & typeof AnotherDto
>;

// notice '$ref' type and '$ref' value
// Accessing:
//   - schema type with $ref["schema_name"]
//   - schema value with $ref("schema_name")
