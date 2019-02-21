/* eslint-disable global-require */

function equalStacks(h1, h2, h3) {
  let st1 = [];
  let st2 = [];
  let st3 = [];
  let s1 = 0;
  let s2 = 0;
  let s3 = 0;
  let l1 = h1.length - 1;
  let l2 = h2.length - 1;
  let l3 = h3.length - 1;

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

  let v1 = st1[l1];
  let v2 = st2[l2];
  let v3 = st3[l3];
  let min;

  while (!(v1 === v2 && v1 === v3)) {
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

module.exports = { equalStacks };
