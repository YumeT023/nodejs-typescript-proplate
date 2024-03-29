import {ZodType, ZodIssue, z} from "zod";

type SchemaRecord = Record<string, ZodType>;

export type inferTypeFromSchemaRecord<SR extends SchemaRecord> = {
  [Key in keyof SR]: z.infer<SR[Key]>;
};

export const nanoid = () => z.string().length(21);

export const issuesToString = (issues: ZodIssue[]) => {
  return issues.reduce((msg, issue) => {
    return `${msg + issue.path.join(".")}: ${issue.message}`;
  }, "");
};
