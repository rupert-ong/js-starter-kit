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

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, (error) => {
  if (error) console.log(error);
  else open(`http://localhost:${port}`);
});
