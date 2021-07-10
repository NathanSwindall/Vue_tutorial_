import {Sorter} from './Sorter'
import { NumbersCollection } from './NumbersCollections'
import { CharaterCollection } from './CharactersCollection'
import { LinkedList } from './linkedList'
import { NumbersCollection_AB } from './NumberCollection_AB'

// Number collections
const numbersCollection = new NumbersCollection([-3,10,-15,2,5,56,-1])
const sorter = new Sorter(numbersCollection)
sorter.sort()
console.log(numbersCollection.data) //

// Character Collection
const characterCollection = new CharaterCollection("Nathan is going to the party tonight")
const sorter_char = new Sorter(characterCollection)
sorter_char.sort()
console.log(characterCollection.data)

// LinkedList Collection
const linkedList = new LinkedList([-10,100, -2,10,30,-1,-4,3,8,4])
const sorter_linked = new Sorter(linkedList)
sorter_linked.sort()
linkedList.print()


// using an abstract class
const numbersCollection_ab = new NumbersCollection_AB([-1,2,45,34,-1,2,-2])
numbersCollection_ab.sort()
console.log(numbersCollection_ab.data)//
