class MyNode {
    next: MyNode | null = null;

    constructor(public data: number){}
}

export class LinkedList {
    head: MyNode | null = null

    constructor(array: number[]){
        
        if(array.length > 0){
            this.head = new MyNode(array[0])
            let head = this.head
            for(let i = 1; i < array.length; i++){
                head.next = new MyNode(array[i])
                head = head.next
            }
        }
    }


    get length(): number{
        let len = 0
        
        let head: MyNode | null = this.head
        while(head){
            len++
            head = head.next
        }

        return len
    }


    add(node: number){
        const mynode = new MyNode(node)

        if(!this.head){
            this.head = mynode
            return;
        }

        let head: MyNode | null = this.head
        while(head.next){
            head = head.next
        }

        head.next = new MyNode(node)


    }

    at(pos: number): MyNode{
        let head = this.head
        let counter = 0

        while(head){
            if(counter == pos){
                return head
            }

            head = head.next
            counter++
        }

        throw Error("Out of bounds")
        
    }

    compare(leftIndex: number, rightIndex: number): boolean{
        return this.at(leftIndex).data > this.at(rightIndex).data
    }

    swap(leftIndex: number, rightIndex: number): void{
        let left = this.at(leftIndex)
        let right = this.at(rightIndex)

        let temp = left.data
        left.data = right.data
        right.data = temp

    }

    

    print(){
        if(!this.head){
            return console.log("The linkedList is empty")
        }

        let head: MyNode | null = this.head
        while(head){
            console.log(head.data)
            head = head.next
        }
    }

}


