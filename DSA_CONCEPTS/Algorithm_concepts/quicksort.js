const arr = [2, -5, 6, 10, 9, 3];

const quicksort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let leftarr = [];
  let rightarr = [];
  let pivot = arr[arr.length - 1];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      rightarr.push(arr[i]);
    } else {
      leftarr.push(arr[i]);
    }
  }
  return [...quicksort(leftarr), pivot, ...quicksort(rightarr)];
};

console.log(quicksort(arr));
