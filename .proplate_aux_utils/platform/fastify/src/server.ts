import fastify from "fastify";
import cors from "@fastify/cors";
import {routes} from "./routes";
import {schemas} from "./schemas";

/**
 * Bootstraps every components:
 * - registers routes and schemas
 * - applies middlewares
 *
 * Refer to [fastify docs](https://fastify.dev/docs/latest) for more info
 */
export const bootstrapServer = () => {
  const server = fastify();

  schemas.forEach((schema) => {
    server.addSchema(schema);
  });

  server.register(cors);

  routes.forEach((route) => {
    server.register(route);
  });

  return server;
};
