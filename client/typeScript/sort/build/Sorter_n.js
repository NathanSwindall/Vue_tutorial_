"use strict";
var Sorter_2 = /** @class */ (function () {
    function Sorter_2(collection) {
        this.collection = collection;
    }
    // This focuses on the last digit being stationary
    Sorter_2.prototype.sort_nathan = function () {
        var collection_length = this.collection.length;
        while (collection_length > 0) {
            for (var i = 1; i < collection_length; i++) {
                var first = this.collection[i - 1];
                var second = this.collection[i];
                if (first > second) {
                    this.collection[i - 1] = second;
                    this.collection[i] = first;
                }
            }
            collection_length -= 1;
        }
    };
    // This one focuses on the first digit being stationary
    Sorter_2.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // if the collection is an array
                if (this.collection instanceof Array) {
                    if (this.collection[j] < this.collection[j + 1]) {
                        var temp = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = temp;
                    }
                }
                // if the collection is a string
                if (typeof this.collection === 'string') {
                }
            }
        }
    };
    return Sorter_2;
}());
var sorter2 = new Sorter_2([-3, 10, -1, 5, 12]);
console.log(sorter2.sort_nathan());
console.log(sorter2.sort());
