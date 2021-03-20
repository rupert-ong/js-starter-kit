import express from "express";
import open from "open";
import path from "path";

const port = 3000;
const app = express();

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, (error) => {
  if (error) console.log(error);
  else open(`http://localhost:${port}`);
});
