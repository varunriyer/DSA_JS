class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
    BFS() {
        if (!root) {
            console.log("No elements to display");
            return;
        }
        let queue = [root];
        while (queue.length) {
            let item = queue.shift();

            console.log(item);

            if (item.left) queue.push(item.left)
        }
    }
}

let root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(7);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

console.log(root);