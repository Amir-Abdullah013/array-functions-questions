let count = (array) => {
  const object = {};

  array.forEach((num) => {
    object[num] = (object[num] || 0) + 1;
  });
  return object;
};
let array = [1, 2, 3, 2, 4, 5, 3, 6];
console.log(count(array));
