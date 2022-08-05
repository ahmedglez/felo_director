/* convert excel into json file */
var xlsx = require('xlsx');
var fs = require('fs');
var path = require('path');
var workbook = xlsx.readFile('test.xlsx');
var sheet_name_list = workbook.SheetNames;
var worksheet = workbook.Sheets[sheet_name_list[0]];
var json = xlsx.utils.sheet_to_json(worksheet);
fs.writeFileSync('test.json', JSON.stringify(json));
console.log(json);



