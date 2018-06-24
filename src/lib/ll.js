
'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this;
  }

  insertAtEnd(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;
  }

  find(value) {
    if (!this.head) {
      throw new Error('The linked list is empty');
    }

    if (this.head.value === value) {
      return this.head;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        return currentNode.next;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  pop() {
    if (!this.head) return undefined;

    let popNode;
    if (!this.head.next) {
      popNode = this.head;
      this.head = null;
      return popNode.value;
    }

    let currentNode = this.head;
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }

    popNode = currentNode.next;
    currentNode.next = null;
    return popNode.value;
  }

  remove(value) {
    if (!this.head) {
      throw new Error('linked list is empty');
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        return this;
      }
      currentNode = currentNode.next;
    }

    return this;
  }
};
