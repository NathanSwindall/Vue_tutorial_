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
exports.NumbersCollection_AB = void 0;
var Sorter_abstract_1 = require("./Sorter_abstract");
var NumbersCollection_AB = /** @class */ (function (_super) {
    __extends(NumbersCollection_AB, _super);
    function NumbersCollection_AB(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(NumbersCollection_AB.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumbersCollection_AB.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    NumbersCollection_AB.prototype.swap = function (indexOne, indexTwo) {
        var temp = this.data[indexOne];
        this.data[indexOne] = this.data[indexTwo];
        this.data[indexTwo] = temp;
    };
    return NumbersCollection_AB;
}(Sorter_abstract_1.Sorter_abstract));
exports.NumbersCollection_AB = NumbersCollection_AB;
