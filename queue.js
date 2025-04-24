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
    size() {
        console.log(this.arr.length);
    }
    peek() {
        console.log(this.arr[0]);
    }
    printQueue() {
        for (let element of this.arr) {
            console.log([...element]);
        }
    }
}