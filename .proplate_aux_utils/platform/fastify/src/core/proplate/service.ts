import {NotFound} from "http-errors"
import {ProplateDto} from "./schema";

// example (not recommended at all) how service are structured
// use nanoid to gen uid

// simple map to store entries
const proplates = new Map(Object.entries({
  ["modern-react-ts-proplate"]: {
    id: "modern-react-ts-proplate",
    name: "modern-react-ts-proplate",
    description: "opinionated react vite typescript starter"
  },
  ["nodejs-typescript-proplate"]: {
    id: "nodejs-typescript-proplate",
    name: "nodejs-typescript-proplate",
    description: "opinionated react vite typescript starter"
  }
}))

// Notice!: functions are not suffixed by 'proplate' ... we are already in the proplate module

const getAll = () => {
  return Promise.resolve(Array.from(proplates.values()));
}

const getById = (pid: string) => {
  const proplate = proplates.get(pid);
  // TODO: monad!!!
  if (!proplate) throw new NotFound("Proplate(id="+ pid + ") is not found.");
  return proplate;
}

// create/update
const crupdate = (toSave: ProplateDto["proplate.crupdate"], pid: string) => {
  proplates.set(pid, toSave);
  return Promise.resolve(toSave);
}

export default {
  getAll,
  getById,
  crupdate,
}
