import {RequestHandler} from "express";
import {ZodType, z} from "zod";
import {issuesToString} from "../util/zod_util";

export interface RequestSchema {
  body: ZodType;
  query: ZodType;
  params: ZodType;
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
    const messages = [
      body.safeParse(req.body),
      query.safeParse(req.query),
      params.safeParse(req.params),
    ].reduce<string[]>((messages, res) => {
      if (!res.success) {
        messages.push(issuesToString(res.error.issues));
      }
      return messages;
    }, []);

    if (messages.length) {
      return res.status(400).send({
        status: 400,
        message: messages.join("\n"),
      });
    }

    next();
  };
};
