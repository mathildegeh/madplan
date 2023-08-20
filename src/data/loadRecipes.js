const fs = require("fs");
const csv = require("csv-parser");

const csvFilePath = "recipes.csv"; // Replace with your CSV file path

const recipes = [];

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on("data", (row) => {
    recipes.push(row);
  })
  .on("end", () => {
    // Convert the recipes array to JSON format
    const jsonData = JSON.stringify(recipes, null, 2);

    // Write the JSON data to a JSON file
    const jsonFilePath = "recipes.json"; // Replace with your desired JSON file path
    fs.writeFileSync(jsonFilePath, jsonData, "utf-8");

    console.log("Conversion successful. JSON file created.");
  });
