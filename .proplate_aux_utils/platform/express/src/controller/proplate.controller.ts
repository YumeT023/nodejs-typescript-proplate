import {$ref} from "../schemas";
import {getAll, getById, crupdate} from "../service/proplate.service";
import {RequestHandler} from "../util/express_types";

const getAllHandler: RequestHandler = async (_, res) => {
  return res.json(await getAll());
};

const getByIdHandler: RequestHandler<any, {pid: string}> = async (
  {params},
  res
) => {
  return res.json(await getById(params.pid));
};

const crupdateHandler: RequestHandler<
  $ref["proplate.crupdate"],
  {pid: string}
> = async ({body, params}, res) => {
  return res.json(await crupdate(body, params.pid));
};

export {getAllHandler, getByIdHandler, crupdateHandler};
