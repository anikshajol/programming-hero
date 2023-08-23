const myFun = (arr1, arr2) => {
  const arr = [...arr1, ...arr2];

  const maxNumber = Math.max(...arr);
  console.log(maxNumber);
};

const arr1 = [1, 2, 3];
const arr2 = [4, 35, 6];

const result = myFun(arr1, arr2);
