function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairWood = perChairWood * chairQuantity;
  const tableWood = perTableWood * tableQuantity;
  const bedWood = perBedWood * bedQuantity;

  const totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}

const totalWood = woodCalculator(2, 3, 5);

console.log(totalWood);
