let convert = (array) => {
  let object = {};
  array.forEach((num, index) => {
    object[index] = num;
  });
  return object;
};

let arr = [10, 20, 30, 40];

console.log(convert(arr));
