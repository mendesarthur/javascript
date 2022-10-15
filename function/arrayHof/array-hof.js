const numbers = [1, 2, 3, 4];
  
// Map
const doubled = numbers.map(function (item) {
        return item * 2;
    });

// console.log(doubled); // [2, 4, 6, 8]

// filter
const evens = numbers.filter(function (a){
    return a % 2 === 0
});
// console.log(evens); // [2, 4]

// Reduce
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); // 10



