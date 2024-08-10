const sortedarry = [2, 5, 6, 7, 10, 14, 16, 18, 20];

const binarySearch = (arr, target) => {
  let leftside = 0;
  let rightside = arr.length - 1;
  console.log("length of arrry is:", arr.length);
  while (leftside <= rightside) {
    let middle = Math.floor((leftside + rightside) / 2);
    console.log("middle is:", middle);
    if (arr[middle] === target) {
      return middle;
    }
    if (arr[middle] <= target) {
      leftside = middle + 1;
    } else {
      rightside = middle - 1;
    }
  }
};

console.log(binarySearch(sortedarry, 5));
