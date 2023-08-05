function reverseWord(text) {
  const word = text.split(" ");

  let result = [];
  for (let i = word.length - 1; i >= 0; i--) {
    let element = word[i];
    result.push(element);
  }

  const reversed = result.join(" ");

  return reversed;
}

const myString = "I am a good boy";

const revWord = reverseWord(myString);

console.log(revWord);
