import {ZodType, z} from "zod";

type SchemaRecord = Record<string, ZodType>;

export type inferTypeFromSchemaRecord<SR extends SchemaRecord> = {
  [Key in keyof SR]: z.infer<SR[Key]>;
};
