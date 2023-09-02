import express from "express";
import Config from "./lib/config.js";
import logger from "./lib/log.js";

const port = process.env.PORT;

const app = express();
app.disable("x-powered-by");

app.get("/api/v1/hello", (_req, res) => {
  logger.info("hello api called");
  res.json({ message: "Hello, world!" });
});

app.listen(port, () => {
  logger.info("Server listening on port", Config.port);
});
