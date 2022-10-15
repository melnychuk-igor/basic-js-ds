const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 class Stack {
  constructor() {
    this._size = 0;
    this._refuge = {};
  }

  push(element) {
    let size = this._size++;
    this._refuge[size] = element;
  }

  pop() {
    let size = this._size,
      deletedData;

    deletedData = this._refuge[size - 1];

    delete this._refuge[size - 1];
    this._size--;

    return deletedData;
  }

  peek() {
    let size = this._size;
    return this._refuge[size - 1];
  }
}

module.exports = {
  Stack
};
