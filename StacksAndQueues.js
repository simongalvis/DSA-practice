/* class Node{
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
} */
class Stack{
    constructor(){
        this.top = null;
        this.length = 0;
    }


    push(data){
        let newNode = new Node(data, null);

        if(this.top === null){
            this.top = newNode;
            this.length++;
            
        }
        else{
            
            this.top = new Node(data, this.top);
            this.length++;
        }
    }


    pop(){
        if(this.top === null) return null;

        this.top = this.top.next;
        this.length--;
    }


    print(){
        let current = this.top;
        let output = "";

        for(let i = 0; i < this.length; i++){
            output += current.value + `\n`;
            current = current.next;
        }
        console.log(output);
    }

}

let stacky = new Stack();



//stacky.print();


/* stacky.push(77);
stacky.push(78);
stacky.push(79);
stacky.push(80);


console.log("Stack Here")
stacky.print();


stacky.pop();


console.log("New Stack Here")
stacky.print();
 */



 //Queue
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.back = null;
    }
    //enqueue - add item to queue
    enqueue(data){
        if(this.front === null){
            this.front = new Node(data, null);
        }
        else if(this.back === null){
            let newNode = new Node(data, null);
            this.back = newNode;
            this.front.next = newNode;

        }
        else{
            let newNode = new Node(data, null);
            this.back.next = newNode;
            this.back = newNode;
        }
    }
    //dequeue - remove an item from the queue
    //print
    print(){
        if(this.first === null) return null;
        let output = "";
        let current = this.front;
        while(current){
            current.next != null ? output+= current.value + " | " : output+= current.value;
            current = current.next;
        }
        console.log(output);
    }
}
let q = new Queue();


q.enqueue(77);
q.enqueue(78);
q.enqueue(79);
q.enqueue(80);
q.enqueue(81);
q.enqueue(82);
q.print();
q.enqueue(83);
q.print();























