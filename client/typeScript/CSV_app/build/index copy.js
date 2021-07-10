"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("./MatchResult");
var FootballCsv_1 = require("./FootballCsv");
var matches = new FootballCsv_1.FootballCsv('football.csv');
matches.read(); //
var manUnitedWins = 0;
var reduced = matches.data.reduce(function (previousValue, currentValue) {
    if (currentValue[1] === 'Man United' && currentValue[5] === MatchResult_1.MatchResult.HomeWin) {
        return previousValue + 1;
    }
    else if (currentValue[2] === 'Man United' && currentValue[5] === MatchResult_1.MatchResult.AwayWin) {
        return previousValue + 1;
    }
    return previousValue;
}, manUnitedWins);
console.log(reduced);
