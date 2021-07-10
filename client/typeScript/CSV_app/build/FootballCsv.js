"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FootballCsv = void 0;
var CsvFileReader_1 = require("./CsvFileReader");
var utils_1 = require("./utils");
var FootballCsv = /** @class */ (function (_super) {
    __extends(FootballCsv, _super);
    function FootballCsv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FootballCsv.prototype.mapRows = function (row) {
        return [
            utils_1.dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6]
        ];
    };
    return FootballCsv;
}(CsvFileReader_1.CsvFileReader));
exports.FootballCsv = FootballCsv;
