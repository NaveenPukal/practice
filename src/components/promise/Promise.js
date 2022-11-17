const time = () => {
  setTimeout(() => {
    console.log("start");
  }, 2000);
};
// console.log("start");
time();
console.log("mid");

for (let i = 0; i < 500; i++) {
  console.log("for loop");
}

console.log("end");
