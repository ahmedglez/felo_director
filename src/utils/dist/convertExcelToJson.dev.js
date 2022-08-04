/* const xlsx = require('xlsx');
const fs = require('fs');

function convertExcelFileToJsonUsingXlsx() {
  // Read the file using pathname
  const file = xlsx.readFile('../database/Variables.xlsx');
  // Grab the sheet info from the file
  const sheetNames = file.SheetNames;
  const totalSheets = sheetNames.length;
  // Variable to store our data
  let parsedData = [];
  // Loop through sheets
  for (let i = 0; i < totalSheets; i++) {
    // Convert to json using xlsx
    const tempData = xlsx.utils.sheet_to_json(file.Sheets[sheetNames[i]]);
    // Skip header row which is the colum names
    tempData.shift();
    // Add the sheet's json to our data array
    parsedData.push(...tempData);
  }
  // call a function to save the data in a json file
  generateJSONFile(parsedData);
}

function generateJSONFile(data) {
  try {
    fs.writeFileSync('../json/data.json', JSON.stringify(data));
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

convertExcelFileToJsonUsingXlsx();
 */
"use strict";