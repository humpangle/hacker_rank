import { SinglyLinkedList } from "./singly-linked-list";

test("SinglyLinkedList.fromList/1", () => {
  expect(SinglyLinkedList.fromList([])).toEqual({
    head: null,
    tail: null
  });

  expect(SinglyLinkedList.fromList([1])).toEqual({
    head: {
      data: 1,
      next: null
    },
    tail: {
      data: 1,
      next: null
    }
  });

  expect(SinglyLinkedList.fromList([1, 2, 3, 4])).toEqual({
    head: {
      data: 1,
      next: {
        data: 2,
        next: {
          data: 3,
          next: {
            data: 4,
            next: null
          }
        }
      }
    },
    tail: {
      data: 4,
      next: null
    }
  });
});

test("SinglyLinkedList.toList/0", () => {
  const list1 = SinglyLinkedList.fromList([]);
  expect(list1.toList()).toEqual([]);

  const list2 = SinglyLinkedList.fromList([1]);
  expect(list2.toList()).toEqual([1]);

  const list3 = SinglyLinkedList.fromList([1, 2, 3, 4]);
  expect(list3.toList()).toEqual([1, 2, 3, 4]);
});

test("SinglyLinkedList.reverse/0", () => {
  const list1 = SinglyLinkedList.fromList([]);
  list1.reverse();
  expect(list1).toEqual({
    head: null,
    tail: null
  });

  const list2 = SinglyLinkedList.fromList([1]);
  list2.reverse();
  expect(list2).toEqual({
    head: {
      data: 1,
      next: null
    },
    tail: {
      data: 1,
      next: null
    }
  });

  const list3 = SinglyLinkedList.fromList([4, 3, 2, 1]);
  list3.reverse();
  expect(list3).toEqual({
    head: {
      data: 1,
      next: {
        data: 2,
        next: {
          data: 3,
          next: {
            data: 4,
            next: null
          }
        }
      }
    },
    tail: {
      data: 4,
      next: null
    }
  });
});
