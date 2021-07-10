"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter_abstract = void 0;
var Sorter_abstract = /** @class */ (function () {
    function Sorter_abstract() {
    }
    Sorter_abstract.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter_abstract;
}());
exports.Sorter_abstract = Sorter_abstract;
