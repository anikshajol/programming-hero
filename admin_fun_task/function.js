function takaToDollar(taka) {
  let dollar = taka / 110;
  return dollar;
}

let bdt = 11000;

const takaToDllar = Math.round(takaToDollar(bdt));

console.log(takaToDllar);

function barbieKen(str) {
  if (str.length % 2 === 0) {
    return "Hi Ken";
  } else {
    return "Hi barbie";
  }
}

const input1 = "phero";
const input2 = "Batch8";
const input3 = "Chatgpt";

console.log(barbieKen(input1));
console.log(barbieKen(input2));
console.log(barbieKen(input3));
