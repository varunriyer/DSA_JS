class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class linkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        let newnode = new Node(value);
        if (!this.head) {
            this.head = newnode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newnode;
    }
}