let array = [1, 2, 2, 3, 4, 5, 3, 2, 10];

let store = [];
array.forEach((element, index) => {
  let count = 0;
  array.forEach((check) => {
    if (element == check) {
      count++;
    }
  });
  if (count > 0) {
    store[index] = element;
  }
});
console.log(array);
