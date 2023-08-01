var color = "green";

if (color === "green") {
  console.log("green freind");
} else if (color === "blue") {
  console.log("blue friend");
} else if (color === "red") {
  console.log("red freind");
} else if (color === "yellow") {
  console.log("himu friend");
} else {
  console.log("black friend");
}

switch (color) {
  case "green":
    console.log("green friend");
    break;
  case "blue":
    console.log("blue freind");
    break;
  case "yellow":
    console.log("himu freind");
    break;
  case "orange":
    console.log("orange friend");
    break;
  default:
    console.log("kala friend");
}

// ternary operator

color == "yellow"
  ? console.log("himu freind")
  : color == "green"
  ? console.log("green friend")
  : color === "orange"
  ? console.log("orange friend")
  : console.log("ondhokar freind");

var smartphone = { brand: "iPhone", model: "13" };

console.log(smartphone.brand);
