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
        return count;

    }
    rotateList(k) {
        let len = this.size();
        if (this.head === null || k === 0 || k % len === 0) {
            console.log(`After ${k} rotations, the list remains the same.`);
            return;
        }

        k = k % len;
        let current = this.head;
        let count = 1;


        while (count < k && current !== null) {
            current = current.next;
            count++;
        }

        let newHead = current.next;
        current.next = null;

        let tail = newHead;
        while (tail.next !== null) {
            tail = tail.next;
        }

        tail.next = this.head;
        this.head = newHead;
    }

}
let myList = new LinkedList();
myList.printList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.append(5)
myList.printList();
console.log(myList.size());
myList.rotateList(13);
myList.printList();