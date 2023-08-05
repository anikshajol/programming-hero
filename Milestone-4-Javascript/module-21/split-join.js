const lyrics =
  "Tumi bondhu kala paKhi ami jno ki.bshonto kale tmay bolte pari ne.sada sada kala kala rong jomese sada kala";

const parts = lyrics.split(" ");

const sentences = lyrics.split(".");

const chars = lyrics.split("");

// console.log(parts);
// console.log(sentences);
// console.log(chars);

const partial = lyrics.slice(5, 9);
const partial2 = lyrics.substring(5, 8);
console.log(partial);
console.log(partial2);

const lines = [
  "Tumi bondhu kala paKhi ami jno ki",
  " bshonto kale tmay bolte pari ne",
  " sada sada kala kala rong jomese sada kala",
];

const newSong = lines.join(":");
console.log(newSong);
