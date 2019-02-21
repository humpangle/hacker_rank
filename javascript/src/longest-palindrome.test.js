const { longestPalindrome } = require("./longest-palindrome");

test("tests", () => {
  expect(longestPalindrome("abccccdd")).toBe(7);
  expect(longestPalindrome("bb")).toBe(2);
  expect(longestPalindrome("bananas")).toBe(5);
});
