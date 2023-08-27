const url = "https://jsonplaceholder.typicode.com/comments";

function loadComments() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const section = document.getElementById("comments-section");

      //   for (const comment of data) {
      //     console.log(comment);

      //   }

      const id = data.filter((pd) => pd.postId === 13);
      console.log(id);

      for (const n of id) {
        const div = document.createElement("div");

        div.innerHTML = `
        <span>ID:${n.id}</span> <br> <hr>
        <span>Post ID:${n.postId}</span>
        <h2>${n.name}</h2>
        <p>${n.body}</p>
        `;

        section.appendChild(div);
      }
    });
}

loadComments();
