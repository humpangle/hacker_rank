const {
  getNode,
  fromLine
} = require("./get-the-value-of-the-node-at-a-specific-position-from-the-tail.js");

it("passes test 1", () => {
  let line1 = `3
                2
                1
              `;

  const list = fromLine(line1);
  expect(getNode(list.head, 1)).toBe("2");
});
