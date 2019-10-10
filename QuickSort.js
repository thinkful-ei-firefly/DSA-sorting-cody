// const arr = [3, 9, 1, 14, 17, 24, 22, 20]

function quickSort(array, start = 0, end = array.length) {
  // BASE stop if at the end of list
  if (start >= end) {
      return array;
  }
  // 
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
};

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
      if (array[i] <= pivot) {
          swap(array, i, j);
          j++;
      }
  }
  swap(array, end-1, j);
  return j;
};

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};
const arr = [6,7,1,3,8,4,5,2,9]
console.log(quickSort(arr))