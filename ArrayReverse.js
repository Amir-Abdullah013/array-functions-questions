let array = [1, 2, 10, 15, 30];
let arrayReverse = [];
array.forEach((element, index) => {
  arrayReverse[index] = array[array.length - (1 + index)];
});
console.log(arrayReverse);
