class Queue {
    constructor() {
        this.arr = []
    }
    enqueue(value) {
        this.arr.push(value);
    }
    dequeue() {
        this.arr.shift();
    }
    size() {
        console.log(this.arr.length);
    }
    peek() {
        console.log(this.arr[0]);
    }
    printQueue() {
        console.log([...this.arr]);
    }
}

let myQueue = new Queue();
myQueue.enqueue(7);
myQueue.enqueue(8);
myQueue.enqueue(9);
myQueue.enqueue(10);
myQueue.printQueue();
myQueue.dequeue();
myQueue.printQueue();
myQueue.peek();
myQueue.size();

