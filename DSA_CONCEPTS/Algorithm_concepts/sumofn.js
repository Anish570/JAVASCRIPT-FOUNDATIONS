const totalSum = (n) => {
  let sum = 0;
  for (i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
};

const summation = (n) => {
  return (n * (n + 1)) / 2;
};

console.log("Total sum is", totalSum(1000));
console.log("Total sum using summation: ", summation(1000));
