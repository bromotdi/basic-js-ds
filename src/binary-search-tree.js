const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor(){
    this.tree = null;
  }

  root = () => this.tree;

  add = (data) => this.tree = addWith(this.tree, data);

  has = (data) => hasNode(this.tree, data);

  find = (data) => findNode(this.tree, data);

  remove = (data) => this.tree = this.removeNode(this.tree, data);

  removeNode(node, data) {
    if(!node) return null;
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }

    else if (node.data < data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }

    else {
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let maxFromLeft = node.left;
      while(maxFromLeft.right) maxFromLeft = maxFromLeft.right;

      node.data = maxFromLeft.data;
      node.left = this.removeNode(node.left, maxFromLeft.data);

      return node;
    }
  }

  min() {
    if(!this.tree) return;
    let minNode = this.tree;
    while (minNode.left) minNode = minNode.left;
    return minNode.data;
  }

  max() {
    if(!this.tree) return;
    let maxNode = this.tree;
    while (maxNode.right) maxNode = maxNode.right;
    return maxNode.data;
  }
}

function addWith(node, data) {
  if(!node) return new Node(data);
  if (node.data === data) return node;
  if (data < node.data) node.left = addWith(node.left, data);
  else node.right = addWith(node.right, data);
  return node;
}

function findNode(node, data) {
  if(!node) return null;
  if (node.data === data) return node;
  return data < node.data ? findNode(node.left, data) : findNode(node.right, data);
}

function hasNode (node, data) {
  if(!node) return false;
  if (node.data === data) return true;
  return data < node.data ? hasNode(node.left, data) : hasNode(node.right, data);
}

module.exports = { BinarySearchTree };
