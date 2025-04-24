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
}

