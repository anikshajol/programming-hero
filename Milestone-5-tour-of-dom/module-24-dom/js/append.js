console.log("append.js");

const placesList = document.getElementById("places-list");

const newLi = document.createElement("li");

newLi.innerText = "India";

placesList.appendChild(newLi);

// div

// where to add

const mainContainer = document.getElementsByTagName("main")[0];

// what add

const section = document.createElement("section");

// div.innerHTML = `
// <h1>My favorite food list</h1>
// <ul>
// <li>Biriani</li>
// <li>kachi</li>
// <li>sandwich</li>
// <li>burger</li>

// </ul>

// `;

mainContainer.appendChild(section);

const h1 = document.createElement("h1");
h1.innerText = "My favorite food list";

section.appendChild(h1);

const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.innerText = "Biriani";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "Kachi";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "Sandwich";
ul.appendChild(li3);

const li4 = document.createElement("li");
li4.innerText = "Burger";
ul.appendChild(li4);

section.appendChild(ul);
