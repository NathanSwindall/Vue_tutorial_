class Sorter_2 {
    constructor(public collection: number[] | string[]){

    }

    // This focuses on the last digit being stationary
    sort_nathan(): void{
        let collection_length = this.collection.length
        while(collection_length > 0){
            for(let i=1; i < collection_length;i++){
                let first = this.collection[i-1]
                let second = this.collection[i]
                if(first > second){
                    this.collection[i-1] = second
                    this.collection[i] = first
                }
            }
            collection_length-=1
        }


    }

    // This one focuses on the first digit being stationary
    sort(): void {
        let {length} = this.collection
        for(let i = 0; i < length; i++){
            for(let j = 0; j < length - i - 1; j++){

                // if the collection is an array
                if(this.collection instanceof Array){
                    if(this.collection[j] < this.collection[j+1]){
                        let temp = this.collection[j]
                        this.collection[j] = this.collection[j+1]
                        this.collection[j+1] = temp
                    }
                }

                // if the collection is a string
                if(typeof this.collection === 'string'){
                    
                }
            }
        }
        
    }
}

const sorter2 = new Sorter_2([-3,10,-1,5,12])
console.log(sorter2.sort_nathan())
console.log(sorter2.sort())