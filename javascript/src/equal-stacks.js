function sum(i) {
  return i.reduce((x, y) => x + y, 0);
}

function equalStacks1(h1, h2, h3) {
  let m1 = sum(h1);
  let m2 = sum(h2);
  let m3 = sum(h3);

  while (!(m1 === m2 && m2 === m3)) {
    if (m1 === 0 || m2 === 0 || m3 === 0) {
      return 0;
    }

    let m = Math.min(m1, m2, m3);

    // console.log(m, h1, h2, h3, m1, m2, m3);

    let next = [];
    let takes = {};
    let adds = {};
    let sums = {};

    if (m1 === m) {
      next["1"] = h1;
      sums["1"] = m;
    } else {
      takes["1"] = h1;
      adds["1"] = m1;
    }

    if (m2 === m) {
      next["2"] = h2;
      sums["2"] = m;
    } else {
      takes["2"] = h2;
      adds["2"] = m2;
    }

    if (m3 === m) {
      next["3"] = h3;
      sums["3"] = m;
    } else {
      takes["3"] = h3;
      adds["3"] = m2;
    }

    for (let k of Object.keys(takes)) {
      let a = adds[k];
      let t = takes[k];

      while (a > m) {
        t.shift();
        a = sum(t);
      }

      takes[k] = t;
      adds[k] = a;
    }

    h1 = takes["1"] || next["1"];
    h2 = takes["2"] || next["2"];
    h3 = takes["3"] || next["3"];

    m1 = adds["1"] || sums["1"] || 0;
    m2 = adds["2"] || sums["2"] || 0;
    m3 = adds["3"] || sums["3"] || 0;
  }

  return m1;
}

function equalStacks(h1, h2, h3) {
  let st1 = [],
    st2 = [],
    st3 = [],
    s1 = 0,
    s2 = 0,
    s3 = 0,
    l1 = h1.length - 1,
    l2 = h2.length - 1,
    l3 = h3.length - 1;

  for (let i = l1; i >= 0; i--) {
    s1 += h1[i];
    st1.push(s1);
  }

  for (let i = l2; i >= 0; i--) {
    s2 += h2[i];
    st2.push(s2);
  }

  for (let i = l3; i >= 0; i--) {
    s3 += h3[i];
    st3.push(s3);
  }

  let v1 = st1[l1],
    v2 = st2[l2],
    v3 = st3[l3],
    min;

  while (!(v1 === v2 && v1 === v3)) {
    // console.log(v1, v2, v3);

    if (v1 === 0 || v2 === 0 || v3 === 0) {
      return 0;
    }

    min = Math.min(v1, v2, v3);

    while (v1 > min) {
      st1.pop();
      v1 = st1[st1.length - 1] || 0;
    }

    while (v2 > min) {
      st2.pop();
      v2 = st2[st2.length - 1] || 0;
    }

    while (v3 > min) {
      st3.pop();
      v3 = st3[st3.length - 1] || 0;
    }
  }

  return st1.pop();
}

let input1 = () => `xxxx
3 2 1 1 1
4 3 2
1 1 4 1`;

let input2 = () => `xxx
1 1 1 1 2
3 7
1 3 1`;

let input3 = () => {
  let fs = require("fs");
  let path = require("path");

  let p = path.resolve(".", "src", "equal-stacks-input-3.txt");

  return fs.readFileSync(p, "utf-8");
};

// input3();

console.log(
  equalStacks(
    ...input3()
      .split("\n")
      .slice(1)
      .map(x =>
        x
          .trim()
          .split(" ")
          .map(y => parseInt(y.trim()))
      )
  )
);
