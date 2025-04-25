class Node {
    constructor(value) {
        this.value = value;
        this.null = null
    }
}
class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value) {
        let newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.prev = newNode
        }
        else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    prepend(value) {
        let newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.head = newNode;
        }
        this.length++;
    }
    toArray() {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }
        let arr = [];
        let current = this.head;

        do {
            arr.push(current.value);
            current = current.next;
        } while (current !== this.head)

        return arr;
    }
}



