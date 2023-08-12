document.getElementById("item2").addEventListener("click", function (event) {
  console.log("item 2 clicked");
  event.stopPropagation();
});

document.getElementById("ul-list").addEventListener("click", function () {
  console.log("ul clicked");
});
document
  .getElementById("list-container")
  .addEventListener("click", function () {
    console.log("section clicked");
  });
