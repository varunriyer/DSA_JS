class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}

let root = new Node(2);
root.left = new Node(1);
root.right = new Node(3);

console.log(root);