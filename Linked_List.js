class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
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
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newnode;
    }
    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + '->';
            current = current.next;
        }
        console.log(result + 'null');
    }
    delete(value) {
        if (!this.head) {
            console.log("Empty list --> Nothing to delete");
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
        }
        let current = this.head;
        while (current.next !== null) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
        if (current.next === null) {
            console.log(`${value} not found in list`);
        }
    }
    prepend(value) { //inserting a new node at the beginning of the list 
        let newnode = new Node(value);
        newnode.next = this.head;
        this.head = newnode;
    }
}

let list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.printList();
list.delete(30);
list.printList();
list.delete(17);
list.prepend(17);
list.printList();

