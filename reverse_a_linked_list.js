class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null
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
    size() {
        if (this.head === null) {
            console.log("List is empty");
            return 0;
        }
        let current = this.head;
        let count = 0;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }
}

let myList = new LinkedList();
myList.printList();
console.log(myList.size());
myList.append(2);
myList.append(4);
myList.append(6);
myList.append(8);
myList.append(10);
console.log(myList.size())
myList.printList();
