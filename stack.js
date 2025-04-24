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
    size() {
        console.log(this.arr.length());
        return;
    }

}

