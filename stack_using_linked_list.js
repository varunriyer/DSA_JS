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

}