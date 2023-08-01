var mobile = {
  model: "galaxy s23 ultra",
  ram: "8gb",
  brand: "samsung",
  price: 108000,
};

for (var propertyName in mobile) {
  var propertyValue = mobile[propertyName];

  //   console.log(propertyName, ":", propertyValue);
}

var propertyName = Object.keys(mobile);

var propertyValue = Object.values(mobile);

console.log(propertyValue);

for (var i = 0; i < propertyName.length; i++) {
  var keys = propertyName[i];
  var values = mobile[keys];

  console.log(keys, ":", values);
}
