// function greeting(greetingHandler, a) {
//   greetingHandler(a);
// }

// function greetingHandler(name) {
//   console.log("hello", name);
// }

// const name = "Shajol";
// greeting(greetingHandler, name);

function greeting(greetingHandler, a, b) {
  greetingHandler(a, b);
}

function greetingHandler(name, l) {
  console.log(name, l);
}

// const greeting = "Hello";
const l = "anik";
const name = "Shajol";
greeting(greetingHandler, name, l);
