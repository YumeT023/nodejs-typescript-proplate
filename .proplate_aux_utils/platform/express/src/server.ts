import express from "express";
import cors from "cors";
import {routes} from "./routes";

/**
 * Bootstraps every components:
 * - registers routes and schemas
 * - applies middlewares
 *
 * Refer to [fastify docs](https://fastify.dev/docs/latest) for more info
 */
export const bootstrapServer = () => {
  const server = express();

  server.use(cors(), express.json());

  routes.forEach((route) => {
    server.use(route);
  });

  return server;
};
