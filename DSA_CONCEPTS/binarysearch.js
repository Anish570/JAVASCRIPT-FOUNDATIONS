// const sortedarry = [2, 5, 6, 7, 10, 14, 16, 18, 20];

// const binarySearch = (arr, target) => {
//   let leftside = 0;
//   let rightside = arr.length - 1;
//   console.log("length of arrry is:", arr.length);
//   while (leftside <= rightside) {
//     let middle = Math.floor((leftside + rightside) / 2);
//     console.log("middle is:", middle);
//     if (arr[middle] === target) {
//       return middle;
//     }
//     if (arr[middle] <= target) {
//       leftside = middle + 1;
//     } else {
//       rightside = middle - 1;
//     }
//   }
// };

// console.log(binarySearch(sortedarry, 5));

const names = [
  "Amber",
  "Bishwas",
  "Cristian",
  "Dart",
  "Earlang",
  "Flutter",
  "Go",
];

const searchName = (names, target) => {
  let leftIndex = 0;
  let rightIndex = names.length - 1;
  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (names[midIndex] === target) {
      return midIndex;
    }
    if (names[midIndex] < target) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }
  return -1;
};

console.log(searchName(names, "Go"));
