let arr = [3, 2, 5, 9, 7, 1];

function sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numbertoinset = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numbertoinset) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = numbertoinset;
  }
  return arr;
}
console.log(sort(arr));
