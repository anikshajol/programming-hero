function a() {
  console.log("a");
  b();
  console.log("aa");
}

function b() {
  console.log("b");
  d();
  console.log("bb");
}

function d() {
  console.log("d");
  console.log("dd");
}

a();

async function f() {
  let result = "first!";
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });
  result = await promise;
  console.log(result);
}
f();
