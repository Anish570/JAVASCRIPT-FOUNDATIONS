function reversestr(str) {
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
}

// console.log(reversestr("Hello, World!")); // Output: "!dlroW ,olleH"

function reversenum(num) {
  reversed = "";
  for (let i = 0; i < num.toString().length; i++) {
    reversed = num.toString().charAt(i) + reversed;
  }
  return Number(reversed);
}

console.log(reversenum(1234));

// built in  reverse function

function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse("hello world"));
