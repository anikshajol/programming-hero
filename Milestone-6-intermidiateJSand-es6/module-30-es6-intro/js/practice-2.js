let evenName = [];
const myFriends = (arr) => {
  for (let name of arr) {
    if (name.length % 2 === 0) {
      evenName.push(name, name.length);
    }
  }
  return evenName;
};

const names = ["Alim", "Shajon", "Nadim", "Apu"];

const result = myFriends(names);

console.log(result);
