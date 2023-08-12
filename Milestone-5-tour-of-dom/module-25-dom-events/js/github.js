// document.getElementById("delete-btn").addEventListener("click", function () {
//   const secretInfo = document.getElementById("secret-info");

//   secretInfo.style.display = "none";
// });

// document
//   .getElementById("input-text")
//   .addEventListener("keyup", function (event) {
//     const text = event.target.value;

//     const deleteBtn = document.getElementById("delete-btn");
//     if (text === "delete") {
//       deleteBtn.removeAttribute("disabled");
//     }
//   });

document.getElementById("delete-btn").addEventListener("click", function () {
  const secretInfo = document.getElementById("secret-info");

  secretInfo.style.display = "none";
});

document
  .getElementById("input-text")
  .addEventListener("keyup", function (event) {
    const inputText = event.target.value;
    const enableBtn = document.getElementById("delete-btn");
    if (inputText === "delete") {
      enableBtn.removeAttribute("disabled");
    }
  });
