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

  test('to create a new instance', () => {
    expect(testList.head).toBeNull();
  });

  test('#insertAtHead', () => {
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

  test('#insertAtEnd', () => {
    testList.insertAtEnd(5);
    expect(testList.head.value).toEqual(5);

    testList.insertAtEnd(6);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(6);
    expect(testList.head.next.next.value).toEqual(7);
  });

  test('#find', () => {
    testList.insertAtEnd(5);
    testList.insertAtEnd(6);
    testList.insertAtEnd(7);

    expect(testList.find(5).value).toBe(5);
    expect(testList.find(6).value).toBe(6);
    expect(testList.find(7).value).toBe(7);
  });

  test('#pop', () => {
    expect(testList.pop()).toBe(undefined);
    testList.insertAtHead(5);
    testList.insertAtEnd(6);
    testList.insertAtEnd(7);
    expect(testList.pop()).toBe(7);
    expect(testList.pop()).toBe(6);
    expect(testList.pop()).toBe(5);
  });

  test('#remove: removes from middle of list', () => {
    testList.insertAtEnd(5);
    testList.insertAtEnd(6);
    testList.insertAtEnd(7);
    testList.remove(6);
    expect(testList.head.next.value).toBe(7);
    expect(testList.remove(1)).toBeInstanceOf(LinkedList);
  });

  test('#remove: returns linked list', () => {
    testList.insertAtHead(5);
    expect(testList.remove(5)).toBeInstanceOf(LinkedList);
  });
});

