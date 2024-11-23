// const fact = (n) => {
//   let result = [];
//   for (let i = 1; i <= n; i++) {
//     let j = n % i;
//     if (j === 0) {
//       result.push(i);
//     }
//   }
//   return result;
// };

// console.log(fact(10)); // Expected output: [1, 2, 5, 10]

//Big O = O(n)

const fact = (n) => {
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result = result * i;
  }
  return result;
};

console.log(fact(5)); // Expected output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

const recursive = (n) => {
  if (n === 1) {
    return 1;
  } else {
    return n * recursive(n - 1);
  }
};

console.log(recursive(5)); // Expected output: 120
