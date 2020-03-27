// 1. How many searches?
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 
// and using the recursive binary search algorithm, 
// identify the sequence of numbers that each recursive call will search to try and find 8.

// 2. Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 
// and using the recursive binary search algorithm, 
// identify the sequence of numbers that each recursive call will search to try and find 16.

function binarySearch(array, value, start, end) {
    start = start == null? 0: start;
    end = end == null ? array.length : end;
    
    if (start > end) {
        return -1;
    }
    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
    return -1
};

binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 8)
binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 16)

class _Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
      this.key = key;
      this.value = value;
      this.parent = parent;
      this.left = null;
      this.right = null;
    }
  
    insert(key, value) {
      if (this.key === null) {
        this.key = key;
        this.value = value;
      }
      else if (key < this.key) {
  
        if (this.left === null) {
          this.left = new BinarySearchTree(key, value, this);
        }
  
        else {
          this.left.insert(key, value);
        }
      }
  
      else {
        if (this.right === null) {
          this.right = new BinarySearchTree(key, value, this);
        }
        else {
          this.right.insert(key, value);
        }
      }
    }
  
    _replaceWith(node) {
      if (this.parent) {
        if (this === this.parent.left) {
          this.parent.left = node;
        }
        else if (this === this.parent.right) {
          this.parent.right = node;
        }
  
        if (node) {
          node.parent = this.parent;
        }
      }
      else {
        if (node) {
          this.key = node.key;
          this.value = node.value;
          this.left = node.left;
          this.right = node.right;
        }
        else {
          this.key = null;
          this.value = null;
          this.left = null;
          this.right = null;
        }
      }
    }
    _findMin() {
      if (!this.left) {
        return this;
      }
      return this.left._findMin();
    }
    traversePreOrder() {
        console.log(this.key)
        if (this.left) {
            this.left.traversePreOrder()
        }
        if (this.right) {
            this.right.traversePreOrder()
        }
    }
    traverseInOrder() {
        if (this.left) {
            this.left.traverseInOrder()
        }
        console.log(this.key)
        if (this.right) {
            this.right.traverseInOrder()
        }
    }
    traversePostOrder() {
        if (this.left) {
            this.left.traversePostOrder()
        }
        if (this.right) {
            this.right.traversePostOrder()
        }
        console.log(this.key)
    }
}


  const tree = new BinarySearchTree()

  tree.insert(25)
  tree.insert(15)
  tree.insert(50)
  tree.insert(10)
  tree.insert(24)
  tree.insert(35)
  tree.insert(70)
  tree.insert(4)
  tree.insert(12)
  tree.insert(18)
  tree.insert(31)
  tree.insert(44)
  tree.insert(66)
  tree.insert(90)
  tree.insert(22)
  console.log(tree)
  console.log('=======')
  tree.traverseInOrder()
  console.log('=======')
  tree.traversePreOrder()
  console.log('=======')
  tree.traversePostOrder()