// Знайти максимальний елемент масиву та його порядковий номер.

const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

let maxNum = 0;
let indexNum = 0;

// TODO: За допомогою циклів

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > maxNum) {
//     maxNum = arr[i];
//     indexNum = i + 1;
//   }
// }

// console.log(
//   `Максимальний елемент масиву: ${maxNum}\nПорядковий номер: ${indexNum}`
// );

// TODO: За допомогою метода forEach та indexOf

arr.forEach((x) => {
  if (x > maxNum) {
    maxNum = x;
    indexNum = arr.indexOf(x) + 1;
  }
});

console.log(
  `Максимальний елемент масиву: ${maxNum}\nПорядковий номер: ${indexNum}`
);