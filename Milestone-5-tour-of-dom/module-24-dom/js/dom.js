// console.log("Hello js");

// console.log(document.body);

// const liCollection = document.getElementsByTagName("li");

// for (let li of liCollection) {
//   //   console.log(li.innerText);
// }

// const AllHeadings = document.getElementsByTagName("h1");

// document.getElementsByTagName("h1")[0].innerText = "hello";

// for (const headings of AllHeadings) {
//   //   console.log(headings.innerText);
// }

// console.log(AllHeadings);

// console.log(liCollection);

const items = document.getElementById("items-title");

const id = items.getAttribute("id");

console.log("from", id);

items.innerText = "Fruits Name";

const style = document.getElementById("items-title").style;
// console.log(style);

style.backgroundColor = "red";
style.display = "flex";
style.justifyContent = "center";
style.color = "white";

const itemsLi = document.getElementsByClassName("item");

for (let item of itemsLi) {
  item.innerText = "apple";
}

// const places = document.getElementsByClassName("important-places");

// for (const place of places) {
//   //   console.log(place.innerHTML);
// }

// const placesI = document.querySelectorAll(".place li");

// for (let place1 of placesI) {
//   console.log(place1.innerHTML);
// }

/* ----------style--------- */

const section = document.querySelectorAll("section");

for (let sec of section) {
  sec.style.border = "1px solid red";
  sec.style.marginTop = "10px";
  sec.style.padding = "5px";
  sec.style.borderRadius = "10px";
}

console.log(section);

// const placeSection = document.getElementsByTagName("section")[2];

// placeSection.classList.add("yellow-bg");
// placeSection.classList.add("large-text");
// placeSection.classList.add("text-align");

// placeSection.classList.remove("large-text");

// console.log(placeSection);

// const ulList = document.querySelector("#place-section ul");

// // console.log(ulList);

// const li = document.createElement("li");

// li.innerText = "dynamic";

// ulList.appendChild(li);

const placeSection = document.querySelector("#places-title");

const pTag = document.createElement("p");

pTag.innerText = "I am going to coxbazar";

placeSection.appendChild(pTag);
