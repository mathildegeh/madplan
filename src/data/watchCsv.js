const chokidar = require("chokidar");
const { exec } = require("child_process");

const csvFilePath = "recipes.csv"; // Replace with your CSV file path

const watcher = chokidar.watch(csvFilePath);

watcher.on("change", () => {
  console.log("CSV file changed. Converting to JSON...");
  exec("node csvToJson.js", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    console.log(`Conversion output: ${stdout}`);
  });
});
