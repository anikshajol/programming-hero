document.getElementById("apply-bg").addEventListener("click", function () {
  const friends = document.getElementsByClassName("friend");
  for (let friend of friends) {
    friend.style.backgroundColor = "red";
    friend.style.color = "white";
  }
});

document.getElementById("center-third").addEventListener("click", function () {
  const center = document.getElementById("center");
  center.style.textAlign = "center";
});

document.getElementById("add-new-friend").addEventListener("click", () => {
  const friends = document.getElementById("friends");

  const div = document.createElement("div");

  div.classList.add("friend");

  div.innerHTML = `

     <h3 class="friend-name">New Friend</h3>
          <p>Maxime tempore doloremque magnam recusandae!</p>
    
    `;

  friends.appendChild(div);
});
