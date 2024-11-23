const isPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

// console.log("is Prime:", isPrime(15));

// const isPowerof2 = (n) => {
//   for (let i = 0; i <= n / 2; i++) {
//     if (n === 2 ** i) {
//       return true;
//     }
//   }
//   return false;
// };

const isPowerof2 = (n) => {
  if (n === 1) {
    return true;
  }
  if (n % 2 === 0) {
    while (n % 2 === 0) {
      n = n / 2;
    }
    if (n === 1) {
      return true;
    }
    return false;
  } else {
    return false;
  }
};

console.log(isPowerof2(1));
console.log(isPowerof2(2));
console.log(isPowerof2(3));
console.log(isPowerof2(4));
console.log(isPowerof2(10));
console.log(isPowerof2(8));
