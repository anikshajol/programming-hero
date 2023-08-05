function reverseString(text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    let element = text[i];

    reversed = reversed + element;

    // console.log(element, reversed);
  }
  return reversed;
}

const myString = "i am a good boy";

// console.log(reverseString(myString));
const reversed = reverseString(myString);

console.log(reversed);
