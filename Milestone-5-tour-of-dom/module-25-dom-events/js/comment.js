// document
//   .getElementById("post-btn")
//   .addEventListener("click", function addComment() {
//     const textField = document.getElementById("comment-area");

//     const comments = textField.value;

//     const container = document.getElementById("container");

//     const p = document.createElement("p");

//     p.innerText = comments;

//     container.appendChild(p);
//     textField.value = "";
//   });

document
  .getElementById("post-btn")
  .addEventListener("click", function addComment() {
    const textArea = document.getElementById("comment-area");

    const comments = textArea.value;

    const container = document.getElementById("container");

    const p = document.createElement("p");

    // p.classList.add("color-red");
    // p.classList.remove("color-red");

    p.innerText = comments;

    container.appendChild(p);

    textArea.value = "";
  });
