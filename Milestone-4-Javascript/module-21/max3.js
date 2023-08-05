// const jim = 84;
// const dela = 99;
// const chinku = 77;
const jim = 69;
const dela = 27;
const chinku = 99;

// if (jim > dela && jim > chinku) {
//   console.log("jim get the cake");
// } else if (dela > jim && dela > chinku) {
//   console.log("dela get the cake");
// } else {
//   console.log("chinku get the cake");
// }

// function getCake() {
//   const maxNum = Math.max(jim, dela, chinku);
//   return maxNum;
// }
function getCake() {
  if (jim > dela && jim > chinku) {
    return "Jim get the cake";
  } else if (dela > jim && dela > chinku) {
    return "dela get the chake";
  } else {
    return "chinku get the cake";
  }
}

console.log(getCake());

// function minNumber() {
//   const min = Math.min(jim, dela, chinku);
//   return min;
// }
function minNumber() {
  if (chinku < dela && chinku < jim) {
    return "chinku get the cake";
  } else if (dela < chinku && dela < jim) {
    return "dela get the cake";
  } else {
    return "jim get the cake";
  }
}
console.log(minNumber());
