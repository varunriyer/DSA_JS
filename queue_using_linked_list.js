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
    dequeue() {
        if (this.head === null) {
            console.log("Queue is empty");
            return;
        }
        let dequeue_element = this.head;
        console.log(`Dequeud Element is: ${dequeue_element}`);
        this.head = this.head.next;
    }

}