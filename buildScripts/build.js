/* eslint-disable no-console */
import chalk from "chalk";
import webpack from "webpack";
import config from "../webpack.config.prod";

process.env.NODE_ENV = "production";

console.log(chalk.blue("Generating minified bundle for production..."));

webpack(config).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map((error) => console.log(chalk.red(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow("Webpack generated the following warnings: "));
    jsonStats.warnings.map((warning) => console.log(chalk.yellow(warning)));
  }

  console.log(
    stats.toString({
      colors: true,
      chunks: false,
    })
  );

  return 0;
});
