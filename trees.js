class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class Tree {
    constructor(root = null) {
        this.root = root
    }

    cleanBFS(root) {
        if (!root) {
            console.log("No Tree elements present");
            return;
        }
        let queue = [root];
        let ans = [];

        while (queue.length) {
            let len = queue.length, level = [];
            for (let i = 0; i < len; i++) {
                let item = queue.shift();
                level.push(item.value);
                if (item.left) queue.push(item.left);
                if (item.right) queue.push(item.right);
            }
            ans.push(level);
        }
        return ans;
    }
    BFS(root) {
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

let tree = new Tree(root);

console.log(tree.cleanBFS(root));
console.log(tree.BFS(root));