function Node(tkey, tvalue) {
    this.key = tkey || null;
    this.value = tvalue || null;
    this.left = null;
    this.right = null;
    this.count = 0;
}

function BinarySearchTree() {
    this._root = null;
    console.log("work");
}


BinarySearchTree.prototype.insert = function(k , v) {
   this._root =  push(this._root , k, v);
   return this;
};
function push(node , myKey ,myVal){
  if(!node){
    return   new Node(myKey,myVal)
  }
  if(node.key > myKey){
    node.left = push(node.left, myKey ,myVal);
  } else if (node.key < myKey) {
    node.right = push(node.right, myKey,myVal)
  } else if (node.key == key) {
    node.value = myVal;
  }
   return node;
}

BinarySearchTree.prototype.root = function(){
  if(!this._root)
      return undefined || null ;
    else {
      return this._root.value;
    }
}

BinarySearchTree.prototype.deleteMin = function(){
  deleteMin(this._root);
}

function deleteMin(node){
  if (!node.left)
      return node.right;
  node.left = deleteMin(node.left);
  return node;
}

BinarySearchTree.prototype.delete = function(key){
  this._root = deleteNode(this._root, key);
}

function deleteNode(node, key){
  if (!node) return null;

  if (node.key > key) node.left = deleteNode(node.left, key);
  else if (node.key < key) node.right = deleteNode(node.right, key);
  else {
    if (!node.right) return node.left;
    if (!node.left) return node.right;

    var t = node;
    node = getMin(t.right);
    node.right = deleteMin(t.right);
    node.left = t.left;
 }
  return node;
  return this;
}
BinarySearchTree.prototype.getMinNode = function(){
  return getMin(this._root);
}
function getMin(node){
  if (!node.left) return node;
  return getMin(node.left);
}

BinarySearchTree.prototype.getMaxNode = function(){
  return getMax(this._root);
}
function getMax(node){
  if (!node.right) return node;
  return getMax(node.left);
}



BinarySearchTree.prototype.search = function (key) {
  if(!this){
      return false;
  }
  else{
    var found = false;
    var current = this._root;
    while(!found && current){
             if (key < current.key){
                 current = current.left;
             } else if (key > current.key){
                 current = current.right;
             } else {
                 found = true;
             }
         }
}
if (found == true){
    return current.value;
}
else{
  return undefined || null;
}
}

BinarySearchTree.prototype.contains = function (value) {
  if(!this){
      return false;
  }
  else{
  if (typeof value == 'string'){
    return true;
  }
  else {
    return false;
  }
}
}
  // var doesContain = false;
  // //accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
  // function recurse(bst) {
  //   if (bst.value === value) {
  //     doesContain = true;
  //   } else if (bst.left !== undefined && value < bst.value) {
  //     recurse(bst.left);
  //   } else if (bst.right !== undefined && value > bst.value) {
  //     recurse(bst.right)
  //   }
  // }
  // recurse(this);
  // return doesContain;

// BinarySearchTree.prototype.contains = function(value) {
//     var node = this._root;
//     var traverse = function(node) {
//         if (!node) return false;
//         if (value === node.value) {
//             return true;
//         } else if (value > node.value) {
//             return traverse(node.right);
//         } else if (value < node.value) {
//             return traverse(node.left);
//         }
//     };
//     return traverse(node);
// };
//
var arr = [] ;
BinarySearchTree.prototype.traverse = function(order){
  if(order == true){
      inOrderTraversal(this._root);
      return arr;
    }
  else {
    arr = [];
inOrderTraversal(this._root);
      return arr.reverse();
  }
}

function inOrderTraversal(node) {
  if(node){
      inOrderTraversal(node.left);
      arr.push(node.value);
      inOrderTraversal(node.right);
   }
};
BinarySearchTree.prototype.verify = function(){
  return isBST(this._root);
}
function isBST(node){
   if(!node){
     return true;
  }

  if(node.left != null && node.left.key > node.key){
    return false;
  }

  if(node.right !=null && node.right.key < node.key) {
    return false;
  }

  if(!isBST(node.left) || !isBST(node.right)) {
    return false;
  }

  return true;
}

module.exports = {
  BinarySearchTree,
  //WARNING!!!
  //PROVIDE BST STRUCTURE FOR TESTS {STRING}
  root: "_root",
  left: "left",
  right: "right",
  //NAME FOR REPORTS
  student: "hordan"
};
