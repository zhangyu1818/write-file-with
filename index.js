const core = require("@actions/core");
const fs = require("fs").promises;
const { join } = require("path");

const main = async () => {
  const path = core.getInput("file", { required: true });
  const scriptPath = core.getInput("script", { required: true });
  console.log("files:", await fs.readdir(process.cwd()));
  const fn = require(join(process.cwd(), scriptPath));
  const fileContent = await fs.readFile(path, { encoding: "utf-8" });
  const result = await fn(fileContent);
  core.setOutput("result", result);
  await fs.writeFile(path, result, { encoding: "utf-8" });
};

main().catch(core.setFailed);
