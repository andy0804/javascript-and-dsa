class Tree {

    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)

    }
}


const zizagTree = new Tree( 3)
zizagTree.right= new Tree(20);
zizagTree.left = new Tree(9);
zizagTree.right.left = new Tree(15)
zizagTree.right.right = new Tree(7)


console.log(zizagTreeLevelOrder(zizagTree));


function zizagTreeLevelOrder(root) {

    if(!root || root.length==0)
    return []
    
    let results = [];
    let level = 0;
    const lot = (root,level)=>  {

        if(!root)
        return;

        if(results[level])
        results[level].push(root.val)
        else
        results[level] = [root.val];

        lot(root.left,level+1)
        lot(root.right,level+1)

    }

    lot(root,0)

    return results.map( (b,index) => (index%2) ?  b.reverse() : b);
}

