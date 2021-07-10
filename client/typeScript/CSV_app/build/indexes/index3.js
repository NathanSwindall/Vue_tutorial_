"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var matches = fs_1.default.readFileSync('football.csv', {
    encoding: 'utf-8'
})
    .split('\n')
    .map(function (line) {
    return line.split(',');
});
var manUnitedWins = 0;
var reduced = matches.reduce(function (previousValue, currentValue) {
    if (currentValue[1] === 'Man United' && currentValue[5] === 'H') {
        return previousValue + 1;
    }
    else if (currentValue[2] === 'Man United' && currentValue[5] === 'A') {
        return previousValue + 1;
    }
    return previousValue;
}, manUnitedWins);
