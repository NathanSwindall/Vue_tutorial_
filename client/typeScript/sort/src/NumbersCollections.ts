export class NumbersCollection {
    constructor(public data: number[]){}

    get length(){
        return this.data.length
    }
    compare(leftIndex: number, rightIndex: number) : boolean {
        return this.data[leftIndex] > this.data[rightIndex]
    }

    swap(indexOne: number, indexTwo: number){
        let temp = this.data[indexOne]
        this.data[indexOne] = this.data[indexTwo]
        this.data[indexTwo] = temp
    }
}