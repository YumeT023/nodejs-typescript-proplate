import {ProplateDto} from "./proplate";
import {inferTypeFromSchemaRecord} from "../../util/zod_util";

// Use \$ref and schemas for req body/query validations
// provide all your schemas with the same structure as the below example
export const \$ref = {
  ...ProplateDto,
}

export type \$ref = inferTypeFromSchemaRecord<typeof \$ref>
