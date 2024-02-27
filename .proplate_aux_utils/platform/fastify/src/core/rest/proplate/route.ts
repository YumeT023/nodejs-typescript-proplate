import {FastifyPluginCallback} from "fastify";
import {getAllHandler, getByIdHandler, crupdateHandler} from "./controller";
import {$ref} from "../schemas";

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
