"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharaterCollection = void 0;
var CharaterCollection = /** @class */ (function () {
    function CharaterCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharaterCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharaterCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    };
    CharaterCollection.prototype.swap = function (leftIndex, rightIndex) {
        var characters = this.data.split('');
        var leftHand = this.data[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this.data = characters.join('');
    };
    return CharaterCollection;
}());
exports.CharaterCollection = CharaterCollection;
