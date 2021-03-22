/* eslint-disable no-console */
import express from "express";
import open from "open";
import path from "path";
import webpack from "webpack";
import config from "../webpack.config.dev";

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(
  require("webpack-dev-middleware")(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.get("/users", (_, res) => {
  res.json([
    { id: "1", firstName: "Bob", lastName: "Smith", email: "bob@gmail.com" },
    {
      id: "2",
      firstName: "Tammy",
      lastName: "Norton",
      email: "tammy@yahoo.com",
    },
    {
      id: "3",
      firstName: "Tina",
      lastName: "Smith",
      email: "tina@hotmail.com",
    },
  ]);
});

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, (error) => {
  if (error) console.log(error);
  else open(`http://localhost:${port}`);
});
