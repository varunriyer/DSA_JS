class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
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
    printList() {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }
        let current = this.head;
        let result = ""
        while (current !== null) {
            result += current.value + "-->";
            current = current.next;
        }
        console.log(result + "null");
    }
    size() {
        if (this.head === null) {
            console.log("Stack is empty; Size is 0");
            return 0;
        }
        let current = this.head;
        let count = 0;
        while (current !== null) {
            count++;
            current = current.next;
        }
        console.log(`Size of array is = ${count}`);
        return count;

    }
    rotateList(k) {
        if (k === this.size()) {
            console.log(`After ${k} rotations the elements will be in the same order`)
            return;
        }
        let current = this.head
        while (k > 0) {
            this.head = this.head.next;
            k--;
        }
        let new_curr = this.head;
        while (new_curr.next !== null) {
            new_curr = new_curr.next;
        }
        new_curr.next = current;
        while (current.next !== this.head) {
            current = current.next;
        }
        current.next = null;
    }
}
let myList = new LinkedList();
myList.printList();
myList.append(2);
myList.append(4);
myList.append(6);
myList.append(8);
myList.append(10);
myList.append(12);
myList.printList();
myList.size();
myList.rotateList(6);
myList.rotateList(4);
myList.printList()