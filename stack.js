class Stack {
    constructor() {
        this.arr = []
    }
    push(value) {
        this.arr.push(value);

    }
    pop() {
        console.log(this.arr.pop());


    }
    size() {
        console.log(this.arr.length);

    }
    printStack() {
        for (let value of this.arr) {
            console.log(value);
        }

    }

    peek() {
        console.log(this.arr[this.arr.length - 1]);

    }
    isEmpty() {
        if (this.arr.length === 0) return (console.log("Yes"));
        console.log("No");
    }
    clear() {
        this.arr = [];
    }
}

const myStack = new Stack();
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.push(6);
myStack.printStack();
myStack.pop()
myStack.printStack();
myStack.peek();
myStack.size();
myStack.isEmpty();
myStack.clear();
myStack.isEmpty();

