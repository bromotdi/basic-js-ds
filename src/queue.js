const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() {
    this.list = null;
    this.queue = null;
  }

  getUnderlyingList = () => this.list;

  enqueue(value) {
    const node = new ListNode(value);
    if (!this.list) this.list = this.queue = node;
    else {
      this.queue.next = node;
      this.queue = node;
    }
  }

  dequeue() {
    const val = this.list.value;
    this.list = this.list.next;
    return val
  }
}

module.exports = { Queue };
