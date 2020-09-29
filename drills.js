const BinarySearchTree = require("./index");

function main() {
  const BST = new BinarySearchTree();
  BST.insert(3);
  BST.insert(1);
  BST.insert(4);
  BST.insert(6);
  BST.insert(9);
  BST.insert(2);
  BST.insert(5);
  //   BST.insert(7);
  //   console.log(BST);
  //   console.log(BST.find(4));
  return BST;
}

// main();

function main2() {
  const BST = new BinarySearchTree();
  BST.insert("E");
  BST.insert("A");
  BST.insert("S");
  BST.insert("Y");
  BST.insert("Q");
  BST.insert("U");
  BST.insert("E");
  BST.insert("S");
  BST.insert("T");
  BST.insert("I");
  BST.insert("O");
  BST.insert("N");
  return BST;
}

// main2();

//QUESTION 4
function main3() {
  const BST = new BinarySearchTree();
  BST.insert(3, 1);
  BST.insert(1, 2);
  BST.insert(4, 3);
  BST.insert(6, 4);
  return BST;
}

function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

// console.log(tree(main3()));

//QUESTION 5 HEIGHT OF BSA
function findHeightofTree(tree) {
  if (tree == null) {
    return 0;
  }
  if (tree.left == null && tree.right == null) {
    return 1;
  } else {
    const leftHeight = findHeightofTree(tree.left);
    const rightHeight = findHeightofTree(tree.right);
    return 1 + (leftHeight > rightHeight ? leftHeight : rightHeight);
  }
}

// console.log(findHeightofTree(main2()));

//QUESTION 6 IS IT BST? RETURN BACK TO THIS
//has more than 2 nodes
//if the right is ever less than the left side
//the converse is true

function isBST(tree) {}

// const notATree = {
//     key: 3,
//     value: null,
//     parent: null,
//     left: {
//         key:2,
//         value: null,
//         parent:
//     },
//     right: {}
// }

// console.log(isBST(main()));

//QUESTION 7: 3RD LARGEST NODE
//input is a tree, output is a node

function thirdLargest(tree) {
  if (!tree.right) {
    // console.log(tree.key);
    // console.log(tree.parent.key);
    return tree.parent.key;
  }
  if (tree.right) {
    return thirdLargest(tree.right);
  }
}

console.log(thirdLargest(main()));

// function toLowerCase(string) {
//   if (string.length == 0) {
//     return string;
//   } else {
//     return string.toLowerCase();
//   }
// }

// console.log(toLowerCase("CAPI"));

//QUESTION 8 Balanced BST
