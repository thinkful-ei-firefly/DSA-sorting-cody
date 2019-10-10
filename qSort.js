function qSort(arr, start=0, end=arr.length ){
  // BASE if we reached the end
  if(start >= end){
    return arr
  }
  // partition
  const middle = partition(arr, start, end)

  arr = qSort(arr, start, middle)
  arr = qSort(arr, middle+1, end)
  return arr
}

function partition(arr, start, end){
  // set pivot
  const pivot = arr[end-1]
  let j=start
  for(let i=start; i<end-1; i++){
    // if x <= pivot val switch the two
    if(arr[i] <= pivot){
      swap(arr, i, j)
      j++
    }
  }
  swap(arr, end-1, j)
  return j;
}

// changes the value in memory of array[i] array[j]
function swap(arr, i, j){
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const arr = [6,7,1,3,8,4,5,2,9]

console.log(qSort(arr))

