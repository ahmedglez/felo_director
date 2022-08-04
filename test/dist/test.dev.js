"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var xlsx = require('xlsx');

var fs = require('fs');

function convertExcelFileToJsonUsingXlsx() {
  // Read the file using pathname
  var file = xlsx.readFile('../src/database/Variables.xlsx'); // Grab the sheet info from the file

  var sheetNames = file.SheetNames;
  var totalSheets = sheetNames.length; // Variable to store our data

  var parsedData = []; // Loop through sheets

  for (var i = 0; i < totalSheets; i++) {
    // Convert to json using xlsx
    var tempData = xlsx.utils.sheet_to_json(file.Sheets[sheetNames[i]]); // Skip header row which is the colum names

    tempData.shift(); // Add the sheet's json to our data array

    parsedData.push.apply(parsedData, _toConsumableArray(tempData));
  } // call a function to save the data in a json file


  generateJSONFile(parsedData);
}

function generateJSONFile(data) {
  try {
    fs.writeFileSync('data.json', JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
}

convertExcelFileToJsonUsingXlsx();