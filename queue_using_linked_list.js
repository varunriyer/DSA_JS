class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.head = null
    }
    enqueue(value) {
        let newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }
}