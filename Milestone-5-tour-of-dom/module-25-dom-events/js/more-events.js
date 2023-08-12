// document.getElementById("btn-more").addEventListener("click", function () {
//   console.log("clicked");
// });

// document.getElementById("btn-more").addEventListener("mousemove", function () {
//   console.log("mouse");
// });

// document.getElementById("text-field").addEventListener("focus", function () {
//   console.log("focus");
// });
// document.getElementById("text-field").addEventListener("blur", function () {
//   console.log("blur");
// });

// key
// document.getElementById("text-field").addEventListener("keydown", function (e) {
//   console.log(e.target.value);
// });

// document
//   .getElementById("text-field")
//   .addEventListener("keypress", function (e) {
//     console.log(e.target.value);
//   });
document.getElementById("text-field").addEventListener("keyup", function (e) {
  console.log(e.target.value);
});
