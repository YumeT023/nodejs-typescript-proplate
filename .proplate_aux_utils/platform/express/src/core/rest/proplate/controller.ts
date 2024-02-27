import {RequestHandler} from "../../../util/express_types";
import {\$ref} from "../schemas";
import service from "./service";

const getAllHandler: RequestHandler = async (_, res) => {
  return res.json(await service.getAll());
};

const getByIdHandler: RequestHandler<any, {pid: string}> = async ({params, }, res) => {
  return res.json(await service.getById(params.pid));
};

const crupdateHandler: RequestHandler<\$ref["proplate.crupdate"], {pid: string}> = async ({
  body,
  params,
}, res) => {
  return res.json(await service.crupdate(body, params.pid));
};

export {getAllHandler, getByIdHandler, crupdateHandler};
