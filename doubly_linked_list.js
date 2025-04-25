class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insertAtBeginning(value) {
        let newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++
    }
    insertAtEnd(value) {
        let newNode = new Node(value)
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }
    insertAtPosition(value, position) {
        if (position < 0 || position > this.length) {
            console.log(`Invalid position: ${position}`);
            return;
        }
        if (position === 1) {
            this.insertAtBeginning(value);
            return;
        }
        if (position === this.length) {
            this.insertAtEnd(value);
            return;
        }
        let newNode = new Node(value);
        let current = this.head;
        for (let i = 1; i < position - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        newNode.prev = current;
        current.next.prev = newNode;
        current.next = newNode;
        this.length++
    }
    deleteNode(value) {
        if (this.head === null) {
            console.log("List is empty, nothing to delete")
            return;
        }
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                if (current === this.head && current === this.tail) {
                    this.head = null;
                    this.tail = null;
                }
                else if (current === this.head) {
                    this.head = current.next;
                    this.head.prev = null;
                }
                else if (current === this.tail) {
                    this.tail = current.prev;
                    this.tail.next = null;
                }
                else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev
                }
                this.length--;
                return;
            }
            current = current.next;
        }
        console.log(`${value} not found`);
    }

    printList() {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }
        let current = this.head;
        let result = "";
        while (current !== null) {
            result += current.value + "<-->";
            current = current.next;
        }
        console.log(result + "null");
    }
    printListReverse() {
        if (this.tail === null) {
            console.log("List is empty");
            return;
        }
        let current = this.tail;
        let result = "";
        while (current !== null) {
            result += current.value + "<-->";
            current = current.prev;
        }
        console.log(result + "null");
    }
    search(value) {
        let index = 0;
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                console.log(`Index is = ${index}`);
                return index;
            }
            index++;
            current = current.next;
        }
        console.log(`${value} not present in list`);
    }
}

let myDLL = new DoublyLinkedList();
myDLL.printList(); // List is empty
console.log(myDLL.length); // 0
myDLL.insertAtBeginning(5);
myDLL.insertAtBeginning(3);
myDLL.printList() //3<-->5<-->null
myDLL.insertAtEnd(11);
myDLL.insertAtEnd(14);
myDLL.printListReverse(); // 14<-->11<-->5<-->3<-->null
myDLL.insertAtPosition(7, 3);
myDLL.printList(); //3<-->5<-->7<-->11<-->14<-->null
console.log(myDLL.length);
myDLL.deleteNode(5);
myDLL.printList(); //3<-->7<-->11<-->14<-->null
myDLL.deleteNode(18); // 18 not found
myDLL.search(7); //Index is = 1
myDLL.search(17); // 17 not present in list


