const BinarySearchTree{
    constructor(key = null){
        this.key = key; 
        this.left = null; 
        this.right = null; 
    }
}

function createBalancedBst(arr){
    if (arr.length){
        return null; 
    }


    const middleIndex =Math.floor(arr.length / 2); 
    const value = arr[middleIndex]; 
    const node = new BinarySearchTree(value); 

    const left = arr.slice(0, middleIndex); 
    const right = arr.slice(middleIndex + 1);


    //this becones jarring because we dont know how deep our tree may be 
    // const middleIndexLeft = Math.floor(left.length / 2); 
    // const valueLeft = left[middleIndexLeft]; 
    // const leftNode = new BinarySearchTree(valueLeft)
    // const middleIndexRight = Math.floor(left.length / 2); 

    node.left = createBalancedBst(left);
    node.right = createBalancedBst(right); 

    return node; 

}

console.log(createBalancedBst([1,2,3, 5, 7, 9, 11])); 


