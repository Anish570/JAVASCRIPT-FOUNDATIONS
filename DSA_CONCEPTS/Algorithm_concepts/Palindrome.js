function reverseStr(str) {
  reversed = "";
  for (char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
const isPalindrome = (val) => {
  if (typeof val === "string") {
    const reverse = reverseStr(val);
    return reverse === val;
  }
  if (typeof val === "number") {
    val < 0 && false;
    const reverse = val.toString().split("").reverse().join("");
    return val.toString() === reverse;
  }
  return false;
};

console.log(isPalindrome("lol"));
console.log(isPalindrome(113311));
console.log(isPalindrome(-113311));
