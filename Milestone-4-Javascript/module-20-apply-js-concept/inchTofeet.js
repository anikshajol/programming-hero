function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

console.log(inchToFeet(144));

function milesToKm(miles) {
  var km = miles * 1.60934;
  return km;
}

const myMiles = 58;

const myKm = milesToKm(myMiles);
console.log(myKm);
