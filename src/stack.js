const { NotImplementedError } = require('../extensions/index.js');

class Stack {
  constructor() {
    this.stask = [];
  }
  push = (element) => this.stask.push(element);
  pop = () => this.stask.pop();
  peek = () => this.stask[this.stask.length-1];
}

module.exports = { Stack };
