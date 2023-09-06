const setAge = () => {
  localStorage.setItem("age", "29");
};

const hello = localStorage.getItem("age");

console.log(hello);
