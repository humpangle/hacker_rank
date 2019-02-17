const {
  fromList,
  mergeLists,
  walk
} = require("./merge-two-sorted-linked-lists");

it("passes test 1", () => {
  const head1 = fromList([4, 5, 6]).head;
  const head2 = fromList([1, 2, 10]).head;
  const testResult = walk(mergeLists(head1, head2));
  expect(testResult).toEqual([1, 2, 4, 5, 6, 10]);
});

it("passes test 2", () => {
  const head1 = fromList([1, 1, 4, 5, 6]).head;
  const head2 = fromList([1, 2, 5, 6, 7]).head;
  const testResult = walk(mergeLists(head1, head2));
  expect(testResult).toEqual([1, 1, 1, 2, 4, 5, 5, 6, 6, 7]);
});
