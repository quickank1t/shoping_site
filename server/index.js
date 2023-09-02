/* eslint-disable no-undef */
import express from "express";
import "dotenv/config";

const port = process.env.PORT;

const app = express();
app.disable("x-powered-by");

app.get("/api/v1/hello", (_req, res) => {
  res.json({ message: "Hello, world!" });
});

app.listen(port, () => {
  console.log("Server listening on port", port);
});
