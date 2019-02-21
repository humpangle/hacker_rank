function longestPalindrome(letters) {
  const lettersMap = {};

  for (let i = 0; i < letters.length; i++) {
    const l = letters[i];
    lettersMap[l] = (lettersMap[l] || 0) + 1;
  }

  let longest = 0;
  let hasOdd = false;
  let values = Object.values(lettersMap);

  for (let index = 0; index < values.length; index++) {
    const element = values[index];

    if (element % 2 === 0) {
      longest += element;
    } else {
      longest += element - 1;

      if (!hasOdd) {
        longest += 1;
        hasOdd = true;
      }
    }
  }

  return longest;
}

module.exports = {
  longestPalindrome
};
