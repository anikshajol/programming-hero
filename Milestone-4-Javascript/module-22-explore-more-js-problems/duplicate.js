const names = [
  "anik",
  "sadika",
  "shima",
  "anifa",
  "shima",
  "anifa",
  "anik",
  "sadika",
  "anifa",
];

function removeDuplicatesNames(names) {
  const unique = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (unique.includes(name) === false) {
      unique.push(name);
    }
  }
  return unique;
}

console.log(removeDuplicatesNames(names));
