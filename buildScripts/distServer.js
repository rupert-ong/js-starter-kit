/* eslint-disable no-console */
import compression from "compression";
import express from "express";
import open from "open";
import path from "path";

/** For hosting minified production build and debugging only */
const port = 3000;
const app = express();

app.use(compression());
app.use(express.static("dist"));

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
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, (error) => {
  if (error) console.log(error);
  else open(`http://localhost:${port}`);
});
