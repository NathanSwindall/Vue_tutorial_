"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var MyNode = /** @class */ (function () {
    function MyNode(data) {
        this.data = data;
        this.next = null;
    }
    return MyNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(array) {
        this.head = null;
        if (array.length > 0) {
            this.head = new MyNode(array[0]);
            var head = this.head;
            for (var i = 1; i < array.length; i++) {
                head.next = new MyNode(array[i]);
                head = head.next;
            }
        }
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            var len = 0;
            var head = this.head;
            while (head) {
                len++;
                head = head.next;
            }
            return len;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.add = function (node) {
        var mynode = new MyNode(node);
        if (!this.head) {
            this.head = mynode;
            return;
        }
        var head = this.head;
        while (head.next) {
            head = head.next;
        }
        head.next = new MyNode(node);
    };
    LinkedList.prototype.at = function (pos) {
        var head = this.head;
        var counter = 0;
        while (head) {
            if (counter == pos) {
                return head;
            }
            head = head.next;
            counter++;
        }
        throw Error("Out of bounds");
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        var left = this.at(leftIndex);
        var right = this.at(rightIndex);
        var temp = left.data;
        left.data = right.data;
        right.data = temp;
    };
    LinkedList.prototype.print = function () {
        if (!this.head) {
            return console.log("The linkedList is empty");
        }
        var head = this.head;
        while (head) {
            console.log(head.data);
            head = head.next;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
