let a = 20;
let b = 10;

const waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 2000);
});

waitingData.then((data) => {
  a = data;
  console.log(a * b);
});
