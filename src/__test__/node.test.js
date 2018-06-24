'use strict';

const Node = require('./../lib/node');

describe('Node class', () => {
  test('Successful', () => {
    const testNode = new Node(1);
    expect(testNode).toBeInstanceOf(Node);
    expect(testNode.value).toBe(1);
    expect(testNode.next).toBeNull();
  });

  test('Unsuccessful', () => {
    const testNode = JSON.parse(JSON.stringify(new Node(1)));
    expect(testNode).not.toBeInstanceOf(Node);
  });
});
