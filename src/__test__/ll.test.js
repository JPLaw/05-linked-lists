'use strict';

const LinkedList = require('../lib/ll');
// const Node = require('../lib/node');
// const inspect = require('./utils');

describe('testing linked list', () => {
  let testList; 
  beforeEach(() => {
    testList = new LinkedList();
  });

  afterEach(() => {
    testList = null;
  });

  it('should create a new instance', () => {
    expect(testList.head).toBeNull();
  });

  it('should insert at head', () => {
    testList.insertAtHead(5);
    expect(testList.head.value).toEqual(5);

    testList.insertAtHead(6);
    expect(testList.head.value).toEqual(6);
    expect(testList.head.next.value).toEqual(5);

    testList.insertAtHead(7);
    expect(testList.head.value).toEqual(7);
    expect(testList.head.next.value).toEqual(6);
    expect(testList.head.next.next.value).toEqual(5);
  });

  it('should insert at end', () => {
    testList.insertAtEnd(5);
    expect(testList.head.value).toEqual(5);

    testList.insertAtEnd(6);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(6);
    
    testList.insertAtEnd(7);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(6);
    expect(testList.head.next.next.value).toEqual(7);
  });

  it('should pop node', () => {
    expect(testList.pop()).toBe(undefined);
    testList.insertAtHead(5);
    testList.insertAtEnd(6);
    testList.insertAtEnd(7);
    expect(testList.pop()).toBe(7);
    expect(testList.pop()).toBe(6);
    expect(testList.pop()).toBe(5);
  });

  it('should removes from middle of list', () => {
    testList.insertAtEnd(5);
    testList.insertAtEnd(6);
    testList.insertAtEnd(7);
    testList.remove(6);
    expect(testList.head.next.value).toBe(7);
    expect(testList.remove(1)).toBeInstanceOf(LinkedList);
  });

  it('should returns linked list', () => {
    testList.insertAtHead(5);
    expect(testList.remove(5)).toBeInstanceOf(LinkedList);
  });
});
