// Знайти мінімальний елемент масиву та його порядковий номер

const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

let minNum = 0;
let indexNum = 0;

// TODO: За допомогою циклів

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < minNum) {
//     minNum = arr[i];
//     indexNum = i + 1;
//   }
// }

// console.log(
//   `Мінімальний елемент масиву: ${minNum}\nПорядковий номер: ${indexNum}`
// );

// TODO: За допомогою метода forEach та indexOf

arr.forEach((x) => {
  if (x < minNum) {
    minNum = x;
    indexNum = arr.indexOf(x) + 1;
  }
});

console.log(
  `Мінімальний елемент масиву: ${minNum}\nПорядковий номер: ${indexNum}`
);
