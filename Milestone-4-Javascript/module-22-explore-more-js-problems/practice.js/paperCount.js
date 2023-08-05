function paperRequirements(book1Quantity, book2Quantity, book3Quantity) {
  const book1 = 100;
  const book2 = 200;
  const book3 = 300;

  const book1Paper = book1 * book1Quantity;
  const book2Paper = book2 * book2Quantity;
  const book3Paper = book3 * book3Quantity;

  const totalPaperNeeds = book1Paper + book2Paper + book3Paper;
  return totalPaperNeeds;
}

const requirementsOfPaper = paperRequirements(10, 10, 14);

console.log(requirementsOfPaper);
