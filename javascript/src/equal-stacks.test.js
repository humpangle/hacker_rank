const { equalStacks } = require("./equal-stacks");
const readQuestion = require("./utils/get-question");

test("1", () => {
  const stacks = stackFromString(readQuestion("equal-stacks/input-1.txt"));
  expect(equalStacks(...stacks)).toBe(5);
});

test("2", () => {
  const stacks = stackFromString(readQuestion("equal-stacks/input-2.txt"));
  expect(equalStacks(...stacks)).toBe(0);
});

test("3", () => {
  const stacks = stackFromString(readQuestion("equal-stacks/input-3.txt"));
  expect(equalStacks(...stacks)).toBe(1656086);
});

function stackFromString(input) {
  return input
    .split("\n")
    .slice(1)
    .map(x =>
      x
        .trim()
        .split(" ")
        .map(y => parseInt(y.trim(), 10))
    );
}
