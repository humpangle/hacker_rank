function processData(input) {
  stack = [];
  for (let i of input.split("\n").slice(1)) {
    let j = i
      .trim()
      .split(" ")
      .map(x => parseInt(x.trim()));
    const f = j[0];

    if (f === 1) {
      stack.push(j[1]);
    } else if (f === 2) {
      stack.pop();
    } else if (f === 3) {
      console.log(Math.max(...stack));
    }
  }
}

const input = `10
1 97
2
1 20
2
1 26
1 20
2
3
1 91
3`;

processData(input);
