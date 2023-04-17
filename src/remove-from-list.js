const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

function removeKFromList(list, k) {
  let deleteN = null;

  while (list && list.value === k) {
    deleteN = list.value;
    list = list.next;
  }

  let currentNode = list;

  while (currentNode.next) {
    if (currentNode.next.value === k) {
      deleteN = currentNode.next;
      currentNode.next = currentNode.next.next;
    }
    else currentNode = currentNode.next;
  }

  return list;
}

module.exports = { removeKFromList };
