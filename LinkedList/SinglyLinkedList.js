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

}


LinkedList.fromValues = function(...values){
    const ll = new LinkedList();
    for(let i = values.length -1 ; i >= 0; i--){
        ll.insertAtHead(values[i])
    }
    return ll
}
module.exports = LinkedList;