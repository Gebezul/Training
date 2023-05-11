// Первая задача
const from = 1;
const to = 5;

const printNumbers = (from, to) => {
  for (let i = from; i <= to; i++) {
    console.log(i);
  }
};

printNumbers(from, to);
setInterval(() => {
  printNumbers(from, to);
}, 1000);

//   Вторая задача
const from = 1;
const to = 5;

const printNumbers = (from, to) => {
  if (from <= to) {
    console.log(from);
    setTimeout(() => {
      printNumbers(from + 1, to);
    }, 1000);
  }
};

printNumbers(from, to);
