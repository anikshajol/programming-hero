function bestFriend(friends) {
  let bestFriend = friends[0];
  for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];

    if (friend.length > bestFriend.length) {
      bestFriend = friend;
    }
  }
  return bestFriend;
}

const friends = ["sajid", "mamun", "kamal", "jubayer bin rased ", "chinku"];

console.log(bestFriend(friends));

function mindGame(number) {
  if (typeof number !== "number") {
    return "please provide a number";
  } else if (number <= 0) {
    return "please provide a positive number";
  }
  const resutl = (number * 3 + 10) / 2 - 5;
  return resutl;
}

console.log(mindGame(55));

function isLGSeven(number) {
  if (typeof number !== "number") {
    return " please provide a number";
  } else {
    const result = number - 7;
    if (result > 7) {
      const mul = number * 2;
      return mul;
    } else {
      return result;
    }
  }
}

// console.log(isLGSeven(-15));

console.log(findingBadData(array));
