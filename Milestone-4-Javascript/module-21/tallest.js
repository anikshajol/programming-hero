function maxInArray(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

const hieghts = [167, 120, 190, 165, 233, 137];

const tallest = maxInArray(hieghts);

console.log("Tallest number is ", tallest);

// lowest

function minAnArray(arr) {
  let lowest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    if (element < lowest) {
      lowest = element;
    }
  }
  return lowest;
}

const measure = [167, 112, 120, 190, 165, 233, 137];

const minMeasure = minAnArray(measure);

console.log(minMeasure);
