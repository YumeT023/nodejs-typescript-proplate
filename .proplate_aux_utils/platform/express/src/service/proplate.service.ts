import {NotFound} from "http-errors";
import {$ref} from "../schemas";

// example (not recommended at all) how service are structured
// use nanoid to gen uid

// simple map to store entries
const proplates = new Map(
  Object.entries({
    ["phOsqYW2jB6tq0WtGwFEO"]: {
      id: "phOsqYW2jB6tq0WtGwFEO",
      name: "modern-react-ts-proplate",
      description: "opinionated react vite typescript starter",
    },
    ["Wr0yfI4baGgb26WqyaiYX"]: {
      id: "Wr0yfI4baGgb26WqyaiYX",
      name: "nodejs-typescript-proplate",
      description: "opinionated react vite typescript starter",
    },
  })
);

// Notice!: functions are not suffixed by 'proplate' ... we are already in the proplate module

const getAll = () => {
  return Promise.resolve(Array.from(proplates.values()));
};

const getById = (pid: string) => {
  const proplate = proplates.get(pid);
  // TODO: monad!!!
  if (!proplate) throw new NotFound("Proplate(id=" + pid + ") is not found.");
  return Promise.resolve(proplate);
};

// create/update
const crupdate = (toSave: $ref["proplate.crupdate"], pid: string) => {
  proplates.set(pid, toSave);
  return Promise.resolve(toSave);
};

export {getAll, getById, crupdate};
