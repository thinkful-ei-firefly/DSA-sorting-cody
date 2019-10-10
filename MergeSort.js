// const arr = [9,1,2,4,5,6,3,7,8]
function mergeSort(array) {
  console.log('Splitting', array)
  // BASE CASE
  // check if array length <= 1, meaning it's sorted
  if (array.length <= 1) {
      return array;
  }

  // get the middle index, round down
  const middle = Math.floor(array.length / 2);
  // get left side of the array to b4 middle
  let left = array.slice(0, middle);
  // get right side of array from middle
  let right = array.slice(middle, array.length);

  // recursively split the list until base case list has 1 or 0 length
  left = mergeSort(left); // 9 after end of first run, goes up the tree once b/c length 9 hits base case
  // now that we have gotten to the last of the left we check the right
  right = mergeSort(right);// hits this when right = 1, so makes it to merge
  
  console.log('Merging', array)
  return merge(left, right, array);
};

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  // while both left&right indexes are not at the end of there arrays
  while (leftIndex < left.length && rightIndex < right.length) { // ex: [9] [1]
    // if left i < right i
      if (left[leftIndex] < right[rightIndex]) { // [false]
         // returning array[index] gets set to left b/c the left was smaller, ++ goes to next index after
          array[outputIndex++] = left[leftIndex++];
      }
      // right i < left i
      else {
          // returning array[index] set to right b/c right is smaller
          array[outputIndex++] = right[rightIndex++]; // array = [1]
      }
  }

  // setts the rest of the array values
  // leftIndex is how many times we set array[i] to the left
  for (let i = leftIndex; i < left.length; i++) { // i=0; i<1; [false]
      array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) { // i=1; i<1; [false]
      array[outputIndex++] = right[i];
  }
  return array;
};

const arr = [9,1,2,4,5,6,3,7,8]

mergeSort(arr)