class Queue {
    constructor() {
        this.arr = []
    }
    enqueue(value) {
        this.arr.push(value);
    }
    dequeue() {
        console.log(this.arr.shift());
    }

}