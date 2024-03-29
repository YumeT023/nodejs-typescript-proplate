import {Router} from "express";
import {z} from "zod";
import {$ref} from "../schemas";
import {
  getAllHandler,
  getByIdHandler,
  crupdateHandler,
} from "../controller/proplate.controller";
import {validateReq} from "../middlewares";
import {nanoid} from "../util/zod_util";

const proplateRouter = Router();

proplateRouter.get("/proplates", getAllHandler);

proplateRouter.get(
  "/proplates/:pid",
  validateReq({
    params: z.object({
      pid: nanoid(),
    }),
  }),
  getByIdHandler
);

proplateRouter.put(
  "/proplates/:pid",
  validateReq({
    params: z.object({
      pid: nanoid(),
    }),
    body: $ref["proplate.crupdate"],
  }),
  crupdateHandler
);

export {proplateRouter};
