class Stack {
    constructor() {
        this.arr = []
    }
    push(value) {
        this.arr.push(value);
        return;
    }
    pop() {
        console.log(this.arr.pop());
        return;

    }
    size() {
        console.log(this.arr.length());
        return;
    }
    printStack() {
        for (let value of this.arr) {
            console.log(value);
        }
        return;
    }

    peek() {
        console.log(this.arr[-1]);
        console.log(this.arr[this.arr.length - 1]);
        return;
    }
}

const myStack = new Stack();
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.push(6);
myStack.printStack();
myStack.pop()
myStack.peek();

