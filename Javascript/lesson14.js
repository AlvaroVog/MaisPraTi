class Node {
    constructor (data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor () {
        this.head = null
        this.size = 0 
    }

    add (data) {
        let newNode = new Node(data)
        if (this.head === null){
            this.head = newNode
        } else {
            let current = this.head
            while(current.next !== null){
                current = current.next 
            }
            current.next = newNode
        }
        this. size++
    }
    insertAt (data, index){
        if (index < 0 || index > tthis.size){
            return console.log ('index fora dos limites!')
        }

        let newNode = new Node (data)
        let current = this.head
        let previous

        if ( index === 0){
            newNode.next = this.head
            this.head = newNode
        } else {
            for (let i = 0; i < index; i++){
                previous = current
                current = current.next
            }

            newNode.next = current
            previous.next = newNode
        }

        this.size++
    }

    removeFrom (index){
        if(index < 0 || index > this.si){
            return console.log ('index fora dos limites !')
        }

        let current = this.head
        let previous

        if (index === 0){
            this.head = current.next
        } else {
            for (let i = 0; i< index; i++){
                previous = current
                current = current.next
            }

            previous.next = current.next
        }

        this.size = this.size - 1
        return current.data 
    }

    printList (){
        let current = this.head
        while(current !== null) {
            console.log(current.data)
            current = current.next
        }
    }
}   

let list = new LinkedList ()

list.add ("Formação +prati")
list.add (true)
list.add ("elemento3")
list.printList ()