import {RequestHandler} from "express";
import {ZodSchema, z} from "zod";

export interface RequestSchema {
  body: ZodSchema;
  query: ZodSchema;
  params: ZodSchema;
}

const DEFAULT_SCHEMA = {
  body: z.any(),
  query: z.any(),
  params: z.any(),
};

// validate req query/params/body
export const validateReq = (schema: Partial<RequestSchema>): RequestHandler => {
  const {body, query, params} = {
    ...DEFAULT_SCHEMA,
    ...schema,
  };

  return (req, res, next) => {
    const errorMessage = [
      body.safeParse(req.body),
      query.safeParse(req.query),
      params.safeParse(req.params),
    ].reduce((message, res) => {
      if (!res.success) {
        // /!\ javascript doesn't need StringBuilder !!!
        message += `.\n${res.error.message}`;
      }
      return message;
    }, "");

    if (errorMessage) {
      return res.status(404).send(errorMessage);
    }

    next();
  };
};
