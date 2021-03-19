const express = require("express");
const path = require("path");
const open = require("open");

const port = 3000;
const app = express();

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, (error) => {
  if (error) console.log(error);
  else open(`http://localhost:${port}`);
});
