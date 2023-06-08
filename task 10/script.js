// Знайти найбільший серед елементів масиву, інші обнулити.

const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

maxNum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxNum) {
    maxNum = arr[i];
  }
}
console.log(`Максимальний елемент масиву: ${maxNum}`)

for (let i = 0; i < arr.length; i++) {
  if (maxNum > arr[i]) {
    arr[i] = 0;
  }
}
console.log(arr);

