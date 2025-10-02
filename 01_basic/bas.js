let arr = [1,2,3,4,5,6,7,8,9,12,34];
let result = arr.map(x => x * 2).filter(x => x % 3 === 0 && x % 5 === 0);
console.log(result);