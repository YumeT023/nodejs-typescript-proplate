import {bootstrapServer} from "./server";

const app = bootstrapServer();

const options = {
  port: Number(process.env.PORT) || 8080,
};

app.listen(options, (err, addr) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log("Server running at", addr);
});
