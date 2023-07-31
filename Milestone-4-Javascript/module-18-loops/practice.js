// aj amar mon valo nai 39 times

for (i = 1; i <= 39; i++) {
  //   console.log(i, "aj amar mon valo nai");
}

// var i = 1;

while (i <= 39) {
  //   console.log(i, "aj amar mon valo nai");
  i++;
}

// show 58-98;

for (var i = 58; i <= 98; i++) {
  //   console.log(i);
}

// var num = 58;

// while (num <= 98) {
//     console.log(num);
//   num++;
// }

for (var i = 412; i <= 456; i += 2) {
  //   console.log(i);
}

for (var i = 581; i <= 623; i += 2) {
  //   console.log(i);
}

// declare an array;

var learned = ["html", "css", "tailwind", "Javascript"];

for (i = 0; i < learned.length; i++) {
  var learn = learned[i];
  //   console.log(i, learn);
}

var usedMobiles = [
  "Nokia",
  "Motorola",
  "Nokia",
  "Samsung",
  "Asus",
  "OnePlus",
  "Samsung",
];
var i = 0;
while (i < usedMobiles.length) {
  var usedMobile = usedMobiles[i];
  //   console.log(usedMobile);
  i++;
}

for (i = 30; i <= 86; i++) {
  if (i > 44) {
    break;
  }
  //   console.log(i);
}

var bookPrices = [150, 199, 340, 200, 105, 203, 400, 1000];

for (var i = 0; i < bookPrices.length; i++) {
  var bookPrice = bookPrices[i];
  if (bookPrice > 200) {
    continue;
  }
  //   console.log(bookPrice);
}

var myWorks = [
  "unlock module",
  "watch video",
  "notes from video",
  "finished the module and practice",
  "not understand",
  "go to support session",
];

for (var i = 0; i < myWorks.length; i++) {
  var myWork = myWorks[i];
  if (myWork === "not understand") {
    break;
  }
  //   console.log(myWork);
}

for (var i = 5; i > 0; i--) {
  myWork = myWorks[i];
  console.log(i, myWork);
}
