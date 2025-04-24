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
}

