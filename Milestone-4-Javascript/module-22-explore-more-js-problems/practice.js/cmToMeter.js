function centimeterToMeter(cm) {
  const meter = cm / 100;
  return meter;
}
const centimeter = 100;
console.log(
  centimeter,
  "centimeter ==",
  centimeterToMeter(centimeter),
  "meter"
);
