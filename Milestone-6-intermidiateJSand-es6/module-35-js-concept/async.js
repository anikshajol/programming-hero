console.log(1);
console.log(2);
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
const TimeOutId = setTimeout(doSomething, 4000);
let num = 0;
const IntervalId = setInterval(() => {
  console.log(++num);
  if (num === 10) {
    clearInterval(IntervalId);
  }
}, 1000);
console.log(4);
console.log(5);
console.log(6);

function doSomething() {
  console.log("timeout");
}

// off by timeOutId
