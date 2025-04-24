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
            return;
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
        let dequeue_element = this.head.value;
        console.log(`Dequeud Element is: ${dequeue_element}`);
        this.head = this.head.next;
    }
    printQueue() {
        if (this.head === null) {
            console.log("Queue is empty");
            return;
        }
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
    peek() {
        if (this.head === null) {
            console.log("Queue is empty");
            return;
        }
        console.log(`Element at the beginning of the Queue is: ${this.head.value}`);
    }
}


let myQueue = new Queue();
myQueue.printQueue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
myQueue.printQueue();
myQueue.dequeue();
myQueue.printQueue();
myQueue.peek();