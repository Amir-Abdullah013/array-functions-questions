let array = [1, 2, 10, 15, 30];
let arrayReverse = [];
arrayReverse = array.map((element,index,array)=>{
return array[array.length- (index+1)];
})
console.log(arrayReverse);
