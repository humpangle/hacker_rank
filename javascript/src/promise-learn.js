function sleepRandom(cb) {
  const randomMilliSecs = Math.ceil((Math.random() + 1) * 500);
  setTimeout(cb, randomMilliSecs);
}

function doA(a) {
  return new Promise((res, rej) => {
    sleepRandom(() => {
      if (a === "a") {
        res(a);
      } else {
        rej(new Error(`wrong argument ${a}`));
      }
    });
  });
}

function doB(b) {
  return new Promise((res, rej) => {
    sleepRandom(() => {
      if (b === "b") {
        res(b);
      } else {
        rej(new Error(`wrong argument ${b}`));
      }
    });
  });
}

function doC(c) {
  return new Promise((res, rej) => {
    sleepRandom(() => {
      if (c === "c") {
        res(c);
      } else {
        rej(new Error(`wrong argument ${c}`));
      }
    });
  });
}

doA("a")
  .then(res => {
    console.log("a result = ", res);
    return doB("b");
  })
  .then(res => {
    console.log("b result = ", res);
    return doC("c");
  })
  .then(res => console.log("c result = ", res));

(async function doWait() {
  try {
    console.log("await a result = ", await doA("a"));
    console.log("await b result = ", await doB("b"));
    console.log("await c result = ", await doC("c"));
  } catch (error) {
    console.log(error);
  }
})();

Promise.race([doA("a"), doB("b"), doC("c")]).then(r =>
  console.log("first result is ", r)
);

Promise.all([doA("a"), doB("b"), doC("c")]).then(r =>
  console.log("all results are ", r)
);
