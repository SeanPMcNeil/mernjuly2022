class Node {
    constructor(value, parent = null) {
        this.value = value;
        this.parent = parent;
        this.children = [];
    }

    // For adding children to the tree
    addChild(value) {
        var child = new Node(value, this);
        this.children.push(child);
        return this;
    }
    
    // For finding the insection of 2 trees
    intersection(node) {
        if (this.value != node.value) return null;

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
        // Done twice over each map in order to make sure we end on a leaf each time
        let temp1 = [];
        let temp2 = [];

        for (const key1 of map1.keys()) {
            for (const key2 of map2.keys()) {
                if (key1[0] == key2[0] && key1[1] == key2[1]) {
                    temp1.push(key1);
                    temp2.push(key2);
                }
            }
        }

        // If the final equal node has children, return null (not a "complete" tree)
        // Because the map set entries in order, the last one *should* be a leaf in each instance
        if (temp1[temp1.length - 1][2].length !== 0 || temp2[temp2.length - 1][2].length !== 0) return null;

        // Build tree for the return result
        let result;
        for (let k = 0; k < temp1.length; k++) {
            if (k == 0) {
                result = new Node(...temp1[k][0]);
            } else if (k == 1) {
                result.addChild(temp1[k][0], temp1[k-1][0])
            } else {
                result.children[k-2].addChild(temp1[k][0], temp1[k-1][0]);
            }
        }

        /*  This breaks if there is more than one valid path (e.g. A -> C -> E && A -> C -> F) 
            because it won't build the return tree properly. Also breaks for results > 3 nodes  -_- */

        return result;
    }

    intersection2(node, runner1 = this, runner2 = node) {
        // If the value is not present in both trees, return null
        if (runner1.value != runner2.value) return null;
        // If the value is a leaf in both trees, return the value
        if (runner1.children.length + runner2.children.length == 0) return [runner1.value];

        let result = [], i = 0, j = 0;
        while (i < runner1.children.length && j < runner2.children.length) {
            let a = runner1.children[i], b = runner2.children[j];
            console.log(`Runner1: ${a.value}`);
            console.log(`Runner2: ${b.value}`);
            for (let path in a.intersection2(b)) {
                result.push([runner1.value, ...path]);
            }
            i += (a.value <= b.value); // boolean converts to 0 or 1
            j += (a.value >= b.value);
        }
        return result;
    }

    // Provides an array of the nodes (including parent and children data) for use in the intersection function
    breadthFirstSearch() {
        let queue = [], 
            result = [];

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

    // For displaying the tree by level (no connections shown)
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
// let intersect = tree1.intersection(tree2);
// console.log(intersect);
// if (intersect != null) console.log(intersect.levelOrder());

console.log(tree1.intersection2(tree2));