const isPalindrome = (x) => {
  x < 0 && false;
  const reverse = x.toString().split("").reverse().join("");
  return x.toString() === reverse;
};

