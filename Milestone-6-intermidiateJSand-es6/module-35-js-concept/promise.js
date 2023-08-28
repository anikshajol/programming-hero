const getData = new Promise((resolve, reject) => {
  //   resolve(123);
  reject("no data ");
});

// console.log(getData + 2); ->cant

getData
  .then((data) => console.log(data + 2))
  .catch((err) => console.error("Err:", err));
