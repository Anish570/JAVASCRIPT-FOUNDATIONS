function maxrepeated(val) {
  const charMap = {};
  for (let char of val) {
    if (charMap[char] === char) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
}

console.log(maxrepeated("anishh"));
