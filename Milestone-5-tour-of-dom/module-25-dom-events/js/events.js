//     <button onclick="makeRed()">Make red</button>

// important we will use this
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option 3;

{
  /* <button id="make-purple">Make Purple</button> */
}

const makeBlueButton = document.getElementById("make-blue");

// makeBlueButton.onclick = function makeBlue() {
//   document.body.style.backgroundColor = "blue";
// };

{
  /* <button id="make-blue">Make Blue</button> */
}

makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

//    <button id="make-purple">Make Purple</button>

const getPurpleButton = document.getElementById("make-purple");

getPurpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// option-4   <!-- option 4 -->

//<button id="make-pink">Make Pink</button>;

const pinkButton = document.getElementById("make-pink");

// pinkButton.addEventListener("click", function makePink() {
//   document.body.style.backgroundColor = "pink";
// });

pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

// option 5 we will use this many
document
  .getElementById("make-golden")
  .addEventListener("click", function makeGolden() {
    document.body.style.backgroundColor = "goldenrod";
  });

//   -----------------*---------------

function makeBlack() {
  document.body.style.backgroundColor = "black";
}

document
  .getElementById("make-white")
  .addEventListener("mouseenter", function makeWhite() {
    document.body.style.backgroundColor = "white";
  });
