//Node class definition
class Node{
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}
//LinkedList class definition
class LinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
    }

    insertAtHead(data){
        let newNode = new Node(data, this.head);
        this.head = newNode;
        this.length++;
    }
    getByIndex(index){
        if(index < 0 || index >= this.length) return null;
        
        let currentElement = this.head;
        for(let i = 0; i < index; i++){
            

            currentElement = currentElement.next;
            
        }
        return currentElement
    }
    insertAtIndex(index, value){
        if(index > this.length || index < 0) return null;
        if(index === 0){
            this.insertAtHead(value);
        }
        const prev = this.getByIndex(index-1);
        if(prev === null) return null;
        const newNode = new Node(value, prev.next)
        prev.next = newNode

        this.length++;
    }
    deleteAtIndex(index){
        if(index < 0 || index > this.length) return null;
        if(index === 0){
             this.head = this.head.next;
             this.length--;
        }
        else{
        const prev = this.getByIndex(index-1);
        prev.next = this.getByIndex(index + 1);

        
        
        
        
        this.length--;
        }
    }
    print(){
        let output = '';
        let current = this.head;
        for (let i = 0; i < this.length; i++){
            output += `${current.value} => `
            current = current.next
        }
        console.log(`${output}null`);
    }

}


LinkedList.fromValues = function(...values){
    const ll = new LinkedList();
    for(let i = values.length -1 ; i >= 0; i--){
        ll.insertAtHead(values[i])
    }
    return ll
}
module.exports = LinkedList;