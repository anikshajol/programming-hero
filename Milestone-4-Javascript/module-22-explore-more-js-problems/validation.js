function add(x, y) {
  if (
    typeof x !== "number" ||
    x === undefined ||
    typeof y !== "number" ||
    y === undefined
  ) {
    return "Write a valid datatype or enter parameter";
  }
  return x + y;
}

console.log(add(22, 1));
