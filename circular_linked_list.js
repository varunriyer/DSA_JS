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
            this.tail = newNode
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
    printList() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        let current = this.head;
        let result = "";
        do {
            result += current.value + "-->";
            current = current.next;
        } while (current !== this.head);
        console.log(result + "back to head");
    }
    traverseToIndex(index) {
        if (index < 0 || index > this.length - 1) {
            console.log(`${index} is an invalid index`);
            return;
        }
        let count = 0;
        let current = this.head;
        while (count != index) {
            current = current.next;
            count++;
        }
        console.log(`Value at index ${index}: ${current.value}`);
    }
}


let myCLL = new CircularLinkedList();
myCLL.toArray();
myCLL.printList();
myCLL.append(1);
myCLL.append(2);
myCLL.append(3);
myCLL.append(4);
myCLL.printList()
console.log(myCLL.length);
console.log(myCLL.toArray());
myCLL.prepend(0);
console.log(myCLL.toArray())
myCLL.printList();
myCLL.traverseToIndex(2);


