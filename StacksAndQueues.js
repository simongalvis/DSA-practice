class Node{
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}
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


stacky.push(77);
stacky.push(78);
stacky.push(79);
stacky.push(80);


console.log("Stack Here")
stacky.print();


stacky.pop();


console.log("New Stack Here")
stacky.print();
