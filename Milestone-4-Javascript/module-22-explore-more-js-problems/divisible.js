const arr = [];
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    arr.push("foobar");
    console.log("foobar");
  } else if (i % 3 === 0) {
    arr.push("foo");
    console.log("foo");
  } else if (i % 5 === 0) {
    arr.push("bar");
    console.log("bar");
  } else {
    arr.push(i);
    console.log(i);
  }
}

console.log(arr);
