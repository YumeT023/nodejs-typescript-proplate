import {RequestHandler} from "../../../util/express_types";
import {$ref} from "../schemas";
import service from "./service";

const getAllHandler = async () => {
  return await service.getAll();
};

const getByIdHandler: RequestHandler<any, {pid: string}> = async ({params}) => {
  return await service.getById(params.pid);
};

const crupdateHandler: RequestHandler<
  $ref["proplate.crupdate"],
  {pid: string}
> = async ({body, params}) => {
  return await service.crupdate(body, params.pid);
};

export {getAllHandler, getByIdHandler, crupdateHandler};
