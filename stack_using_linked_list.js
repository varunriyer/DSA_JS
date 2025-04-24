class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.head = null;
    }

    push(value) {
        let newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode;
    }
    pop() {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }
        let poppedValue = this.head.value;
        this.head = this.head.next;
        console.log(`Popped value: ${poppedValue}`);
    }
    printStack() {
        if (this.head === null) {
            console.log("Stack is empty");
            return;
        }

        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
    size() {
        if (this.head === null) {
            console.log("Stack is empty; Size = 0");
            return;
        }
        let current = this.head;
        let count = 0;
        while (current !== null) {
            count++;
            current = current.next;
        }
        console.log(`Size is = ${count}`);
    }
    peek() {
        if (this.head === null) {
            console.log("Stack is empty");
            return;
        }
        console.log(this.head.value);
    }
    clear() {
        this.head = null;
    }
    isEmpty() {
        if (this.head === null) {
            console.log("Yes");
        }
        else {
            console.log("No");
        }
    }
}
let myStack = new Stack();
myStack.printStack();
myStack.push(5);
myStack.push(10);
myStack.push(15);
myStack.push(20);
myStack.printStack();
myStack.pop();
myStack.printStack();
myStack.size();
myStack.peek();
myStack.clear();
myStack.size();
myStack.push(7);
myStack.pop();
myStack.isEmpty();