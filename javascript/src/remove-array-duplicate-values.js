function dedupe(array) {
  return Object.values(
    array.reduce((acc, a) => {
      acc[a] = a;
      return acc;
    }, {})
  );
}

function dedupe1(array) {
  return [...new Set(array)];
}

module.exports = {
  dedupe,
  dedupe1
};
