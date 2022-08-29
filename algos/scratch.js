class Node {
    constructor(value, parent = null) {
        this.value = value;
        this.parent = parent;
        this.children = [];
    }
    
    intersection(node) {
        // Create Map from first tree
        let map1 = new Map();
        let allNodes1 = this.breadthFirstSearch();

        for (let i = 0; i < allNodes1.length; i++) {
            if (!map1.has(allNodes1[i])) {
                if (allNodes1[i].parent != null) {
                    map1.set([allNodes1[i].value, allNodes1[i].parent.value, allNodes1[i].children], 1);
                } else {
                    map1.set([allNodes1[i].value, allNodes1[i].parent, allNodes1[i].children], 1);
                }
            }
        }
        
        // Create Map from second tree
        let map2 = new Map();
        let allNodes2 = node.breadthFirstSearch();
        for (let j = 0; j < allNodes2.length; j++) {
            if (!map2.has(allNodes2[j])) {
                if (allNodes2[j].parent != null) {
                    map2.set([allNodes2[j].value, allNodes2[j].parent.value, allNodes2[j].children], 1);
                } else {
                    map2.set([allNodes2[j].value, allNodes2[j].parent, allNodes2[j].children], 1);
                }
            }
        }
        
        // Find entries where the values and parents are equal
        let temp = [];
        for (const key1 of map1.keys()) {
            for (const key2 of map2.keys()) {
                if (key1[0] == key2[0] && key1[1] == key2[1]) {
                    temp.push(key1);
                }
            }
        }

        // Build tree for the return result
        let result;
        for (let k = 0; k < temp.length; k++) {
            if (k == 0) {
                result = new Node(...temp[k][0]);
            } else if (k == 1) {
                result.addChild(temp[k][0], temp[k-1][0])
            } else {
                result.children[k-2].addChild(temp[k][0], temp[k-1][0]);
            }
        }

        /*  This breaks if there is more than one valid path (e.g. A -> C -> E && A -> C -> F) 
            because it won't build the return tree properly. It should work for larger trees IF
            there is only one valid intersection. */

        return result;
    }

    breadthFirstSearch() {
        let queue = [];
        let result = [];

        let node;

        queue.push(this);

        while(queue.length) {
            node = queue.shift();
            result.push(node);

            if (node.children) {
                for (let i = 0; i < node.children.length; i++) {
                    queue.push(node.children[i]);
                }
            }
        }

        return result;
    }

    levelOrder() {
        const result = [], 
            queue = [];
        let depth = 0, 
            num = 0;
        if (this) queue.push(this);
        while (queue.length) {
            result.push([]);
            num = queue.length;
            for (let i = 0; i < num; i++) {
                const current = queue.shift();
                if (!current) continue;
                result[depth].push(current.value);
                queue.push(...current.children);
            }
            depth++;
        }
        return result;
    }

    addChild(value) {
        var child = new Node(value, this);
        this.children.push(child);
        return this;
    }
}

// Create the trees given in the question
let tree1 = new Node("A");
tree1.addChild("B").addChild("C");
tree1.children[1].addChild("E").addChild("D");

console.log(tree1.levelOrder());

let tree2 = new Node("A");
tree2.addChild("C");
tree2.children[0].addChild("F").addChild("E");

console.log(tree2.levelOrder());

// Get intersection of pairs of these trees
let intersect = tree1.intersection(tree2);
console.log(intersect.levelOrder());