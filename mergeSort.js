function mergeSort(array) {
  if (array.length <= 1) return array;

  const mid = Math.ceil((array.length - 1) / 2);
  const arrayLeft = array.slice(0, mid);
  const arrayRight = array.slice(mid);
  let sortedArray = [];

  (function mergeArrays(left, right) {
    const n = left.length + right.length;
    for (let i = 0; i < n; i++) {
      if (!left[0] && !right[0]) return;
      if (left[0] <= right[0] || (!right[0] && left[0])) {
        sortedArray.push(left.shift());
      } else if (left[0] >= right[0] || (!left[0] && right[0])) {
        sortedArray.push(right.shift());
      }
    }
  })(mergeSort(arrayLeft), mergeSort(arrayRight));

  return sortedArray;
}

function generateRandomArray() {
  const array = [];
  for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
    const randomNumber = Math.floor(Math.random() * 100);
    array.push(randomNumber);
  }
  return array;
}

console.log(mergeSort(generateRandomArray()));
