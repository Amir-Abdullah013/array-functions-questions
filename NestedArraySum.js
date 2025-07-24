let arr = [
  [1, 5],
  [2, 6],
  [3, 7],
];

let sums = arr.map((array) => {
  let sum = 0;

  array.forEach((num) => (sum += num));

  return [sum];
});
console.log(sums);
