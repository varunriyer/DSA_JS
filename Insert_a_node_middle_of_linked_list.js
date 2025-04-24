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
        let result = "";
        let current = this.head;
        while (current !== null) {
            result += current.value + "-->";
            current = current.next;
        }
        console.log(result + "null");
    }
    insertAtMiddle(value) {
        let newNode = new Node(value)
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let length = 0;
        let current = this.head;
        while (current !== null) {
            current = current.next;
            length++;
        }
        let position;
        if ((length % 2) === 0) {
            position = length / 2;
        }
        else {
            position = (length + 1) / 2;
        }
        current = this.head;
        while (position > 1) {
            current = current.next;
            position--;
        }
        newNode.next = current.next;
        current.next = newNode;
    }
    deleteList() {
        this.head = null;
    }
    deleteNode(index) {
        if (this.head === null || index < 0) {
            console.log("Empty List, nothing to delete or you have provided invalid index");
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        let prev = null;
        let current = this.head;
        while (current !== null && index > 0) {
            prev = current;
            current = current.next;
            index--;
        }
        if (current !== null) {
            prev.next = current.next;
            return;
        }
        console.log(`Index out of range for list`);
        return;
    }
    listLength() {
        let count = 0;
        let current = this.head;
        while (current != null) {
            count++;
            current = current.next;
        }
        console.log(`Length of List is = ${count}`);
        return count;
    }
}

let myList = new LinkedList();
myList.printList();
myList.append(5);
myList.append(10);
myList.append(15);
myList.append(20);
myList.printList();
myList.insertAtMiddle(4);
myList.printList();
myList.insertAtMiddle(5);
myList.printList();
myList.deleteList();
myList.printList();
myList.append(7);
myList.printList();
myList.append(8);
myList.printList();
myList.append(9);
myList.printList();
myList.deleteNode(5);
myList.listLength();
myList.deleteNode(2);
myList.printList();
myList.listLength();