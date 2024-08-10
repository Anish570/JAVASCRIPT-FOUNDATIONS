const fibonaci = (n) => {
  if (n == 1) return [0];
  if (n == 2) return [0, 1];
  let fib = [0, 1];
  for (let i = 3; i <= n; i++) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib;
};

console.log(fibonaci(2));

var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let first = 0;
  let second = 1;
  let third;
  for (let i = 2; i <= n; i++) {
    third = first + second;
    frist = second;
    second = third;
  }
  return third;
};

console.log("value received from fib fun:", fib(3));
