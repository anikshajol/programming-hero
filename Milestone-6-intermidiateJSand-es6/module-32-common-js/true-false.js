/* 
Truthy:
1. true
2. any numbers accept 0
3. any string
4. empty object 




Falsy: 
1. false 
2. 0
3. empty string
4. undefined
5. null 

*/

// const x = 0;
// const x = 4;
// const x = false;
// const x = true;
// const x = "Anik";
// const x = "";
// let x;
// const x = null;
// const x = {};
// const x = []
const x = [];

if (x) {
  console.log("x is truthy");
} else {
  console.log("x is falsy");
}

// check falsy

const y = "";
if (!y) {
  console.log("falsy");
}

// check truthy

const z = {};

if (!!z) {
  console.log("truthy");
}
