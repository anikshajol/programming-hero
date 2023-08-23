const arrowFun = (a, b, c) => a * b * c;

// const result = arrowFun(2, 3, 4);
// console.log(result);

const myJob = ` 
I am a web Developer.
I love to code.
I love to eat biriyani.

`;

// console.log(myJob);

const defaultParameter = (firstName, lastName = "") => {
  const fullName = firstName + lastName;
  return fullName;
};

console.log(defaultParameter(`Md Anik`));
