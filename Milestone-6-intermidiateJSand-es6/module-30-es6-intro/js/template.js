const person1 = "Sadika";
const person2 = "Anik";
const person3 = `shima`;

// const multiline = "1st line \n" + "second line \n" + "3rd line";

const multiline = `1st line
second line
third line
`;

const a = 10;
const b = 20;

// const summary = "sum of: " + a + "and" + b + "is:" + (a + b);

const summary = `sum of: ${a} and ${b} is: ${a + b}`;

console.log(summary);

let mul = 5;

for (let i = 1; i <= 10; i++) {
  const result = mul * i;
  console.log(`${mul}*${i}=${result}`);
}
