"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollections_1 = require("./NumbersCollections");
var CharactersCollection_1 = require("./CharactersCollection");
var linkedList_1 = require("./linkedList");
var NumberCollection_AB_1 = require("./NumberCollection_AB");
// Number collections
var numbersCollection = new NumbersCollections_1.NumbersCollection([-3, 10, -15, 2, 5, 56, -1]);
var sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data); //
// Character Collection
var characterCollection = new CharactersCollection_1.CharaterCollection("Nathan is going to the party tonight");
var sorter_char = new Sorter_1.Sorter(characterCollection);
sorter_char.sort();
console.log(characterCollection.data);
// LinkedList Collection
var linkedList = new linkedList_1.LinkedList([-10, 100, -2, 10, 30, -1, -4, 3, 8, 4]);
var sorter_linked = new Sorter_1.Sorter(linkedList);
sorter_linked.sort();
linkedList.print();
// using an abstract class
var numbersCollection_ab = new NumberCollection_AB_1.NumbersCollection_AB([-1, 2, 45, 34, -1, 2, -2]);
numbersCollection_ab.sort();
console.log(numbersCollection_ab.data); //
