import {FastifyPluginCallback} from "fastify";
import {$ref} from "../schemas";
import {
  getAllHandler,
  getByIdHandler,
  crupdateHandler,
} from "../controller/proplate.controller";

export const proplateRoutes: FastifyPluginCallback = (server, _, done) => {
  server.get("/proplates", getAllHandler);

  server.get("/proplates/:pid", getByIdHandler);

  server.put(
    "/proplates/:pid",
    {
      schema: {
        body: $ref("proplate.crupdate"),
      },
    },
    crupdateHandler
  );

  done();
};
