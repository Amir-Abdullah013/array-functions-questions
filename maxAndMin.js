let array = [-35, 10, 45, 6, 8, 50, 7, 5];

let max = -Infinity;
let min = Infinity;

array.forEach((element, index) => {
  if (element > max) {
    max = element;
  }
  if (element < min) {
    min = element;
  }
});
console.log(max);
console.log(min);
