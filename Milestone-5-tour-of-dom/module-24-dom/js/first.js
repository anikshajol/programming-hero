// all h1 tag
const sectionTitle = document.querySelectorAll(".section h1");

for (let title of sectionTitle) {
  title.style.textTransform = "uppercase";
}

// second section

const secondSection = document.getElementById("section-2");

const secondSectionStyle = secondSection.style;

secondSectionStyle.backgroundColor = "blue";
secondSectionStyle.color = "white";
secondSectionStyle.fontWeight = "bold";

// add some list item

const ulLIst = document.querySelectorAll("#section-2 ul");

const liItems = ulLIst[0];

const newList = document.createElement("li");
const newList6 = document.createElement("li");

newList.innerText = "item-5";
newList6.innerText = "item-6";

liItems.appendChild(newList);
liItems.appendChild(newList6);

// add section

const newSection = document.getElementsByTagName("main");

const newSectionAdd = newSection[0];

const section = document.createElement("section");

section.classList.add("section");

section.innerHTML = `
<h1> hello-5</h1>
<ul>
<li>item-1</li>
<li>item-2</li>
<li>item-3</li>
<li>item-4</li>
</ul>

`;

newSectionAdd.appendChild(section);

const sections = document.querySelectorAll(".section");

for (const section of sections) {
  //   console.log(section);
  section.style.border = "1px solid red";
  section.style.padding = "5px";
  section.style.display = "flex";
  section.style.flexDirection = "column";
  section.style.justifyContent = "center";
  section.style.alignItems = "center";
  section.style.marginTop = "5px";
}
