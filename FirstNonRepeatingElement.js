let array = [1, 2, 2, 3, 4, 5, 3, 2, 10];
let counts = {};
let firstNonRepeating;

array.forEach((element) => {
  counts[element] = (counts[element] || 0) + 1;
});

array.forEach((element) => {
  if (counts[element] === 1 && firstNonRepeating === undefined) {
    firstNonRepeating = element;
  }
});

console.log(firstNonRepeating);
