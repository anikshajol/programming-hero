const lyrics =
  "Tumi bondhu kala paKhi ami jno ki bshonto kale tmay bolte pari ne. sada sada kala kala rong jomese sada kala.";

const searchPakhi = "Pakhi";

const lowerCase = searchPakhi.toLowerCase();

const lowerString = lyrics.toLowerCase();

const doesExist = lowerString.includes(lowerCase);

// console.log(doesExist);

// indexOf;

if (lyrics.indexOf("kdfksk") !== -1) {
  console.log("exist inside the string");
} else console.log("not in the string");

console.log("index", lyrics.indexOf("dkjfdkk"));

// startsWith;

console.log(lyrics.startsWith("Tumi"));

// endswith;

const fileName = "mybiodata.pdf";
const otherFile = "image.png";

console.log("ends", fileName.endsWith(".pdf"));
