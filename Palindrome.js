let array = [1, 2, 2, 1];

let check = true;

array.forEach((element, index) => {
  if (index < array.length / 2) {
    if (element !== array[array.length - (1 + index)]) {
      check = false;
    }
  }
});
console.log(check);
