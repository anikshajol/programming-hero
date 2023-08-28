console.log(1);
console.log(2);

// setTimeout(() => {
//   console.log(3);
// }, 2000);
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

// task create digital clock and stopwatch
