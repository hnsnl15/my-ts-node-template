import express from "express";
import { helloMama } from "./hellomama.js";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send(helloMama + " Hello world" + " Hello everyone");
});

app.listen(4000, (): void => {
  console.log("Server running at port 4000.");
});
