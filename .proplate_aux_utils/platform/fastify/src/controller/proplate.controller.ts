import {FastifyRequest} from "fastify";
import {$ref} from "../schemas";
import {getAll, getById, crupdate} from "../service/proplate.service";

const getAllHandler = () => {
  return getAll();
};

const getByIdHandler = async ({
  params,
}: FastifyRequest<{
  Params: {
    pid: string;
  };
}>) => {
  return getById(params.pid);
};

const crupdateHandler = async ({
  body,
  params,
}: FastifyRequest<{
  Body: $ref["proplate.crupdate"];
  Params: {
    pid: string;
  };
}>) => {
  return await crupdate(body, params.pid);
};

export {getAllHandler, getByIdHandler, crupdateHandler};
