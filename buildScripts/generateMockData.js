/* eslint-disable no-console */
import chalk from "chalk";
import fs from "fs";
import { generate } from "json-schema-faker";
import { schema } from "./mockDataSchema";

const json = JSON.stringify(generate(schema));

fs.writeFile("./src/api/db.json", json, (err) => {
  if (err) return console.log(chalk.red(err));
  else console.log(chalk.green("Mock data generated"));
});
