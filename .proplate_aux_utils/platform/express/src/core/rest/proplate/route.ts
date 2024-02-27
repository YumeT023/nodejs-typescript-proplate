import {Router} from "express";
import {z} from "zod";
import {getAllHandler, getByIdHandler, crupdateHandler} from "./controller";
import {validateReq} from "../middlewares";
import {\$ref} from "../schemas";
import {nanoid} from "../../../util/zod_util";

const proplateRouter = Router();

proplateRouter.get("/proplates", getAllHandler);

proplateRouter.get(
  "/proplates/:pid",
  validateReq({
    params: nanoid(),
  }),
  getByIdHandler
);

proplateRouter.put(
  "/proplates/:pid",
  validateReq({
    params: z.object({
      pid: nanoid(),
    }),
    body: \$ref["proplate.crupdate"],
  }),
  crupdateHandler
);

export {proplateRouter};
