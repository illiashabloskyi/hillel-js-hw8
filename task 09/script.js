// Знайти добуток позитивних елементів.

const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

let mul = 1;

// TODO: За допомогою циклів

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     mul *= arr[i];
//   }
// }

// console.log(`Добуток позитивних елементів: ${mul}`);

// TODO: За допомогою метода forEach

arr.forEach(x => {
  if(x > 0){
    mul *= x;
  }
})

console.log(`Добуток позитивних елементів: ${mul}`);