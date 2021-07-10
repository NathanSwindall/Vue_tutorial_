"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var CsvTypes_1 = require("./CsvTypes");
var MatchReader_1 = require("./MatchReader");
var csvReader = new CsvFileReader_1.CsvFileReader('football.csv');
csvReader.read(); //
console.log(csvReader.data);
var matches = new MatchReader_1.MatchReader(csvReader);
matches.load();
var manUnitedWins = 0;
var reduced = matches.data.reduce(function (previousValue, currentValue) {
    if (currentValue[1] === 'Man United' && currentValue[5] === CsvTypes_1.MatchResult.HomeWin) {
        return previousValue + 1;
    }
    else if (currentValue[2] === 'Man United' && currentValue[5] === CsvTypes_1.MatchResult.AwayWin) {
        return previousValue + 1;
    }
    return previousValue;
}, manUnitedWins);
console.log(reduced);
