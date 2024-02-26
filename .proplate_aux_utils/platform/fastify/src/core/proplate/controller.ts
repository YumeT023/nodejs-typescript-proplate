import {FastifyRequest} from "fastify";
import {ProplateDto} from "./schema";
import service from "./service";

const getAllHandler = () => {
  return service.getAll();
}

const getByIdHandler = async ({params}: FastifyRequest<{
  Params: {
    pid: string;
  }
}>) => {
  return service.getById(params.pid);
}

const crupdateHandler = async ({body, params}: FastifyRequest<{
  Body: ProplateDto["proplate.crupdate"],
  Params: {
    pid: string;
  }
}>) => {
  return await service.crupdate(body, params.pid);
}

export {
  getAllHandler,
  getByIdHandler,
  crupdateHandler,
}
