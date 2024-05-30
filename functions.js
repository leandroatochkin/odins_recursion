function fibonacci(n) {
    if (n <= 0) return [];
    let arr = [0];
    if (n === 1) return arr;
    arr.push(1);
    for (let i = 2; i < n; i++) {
      let next = arr[i - 1] + arr[i - 2];
      arr.push(next);
    }
    return arr;
  }
  
  console.log(fibonacci(8));
  
  function fibo(n, arr = [0, 1]) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (arr.length >= n) return arr.slice(0, n);
  
    let next = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(next);
  
    return fibo(n, arr);
  }
  
  console.log(fibo(8));
  
  function mergeSort(arr) {
    if (arr.length < 2) {
      return arr;
    }
    function split_half(arr) {
      const half = Math.floor(arr.length / 2);
      const f_half = arr.slice(0, half);
      const s_half = arr.slice(half);
      return [f_half, s_half];
    }
    const [sub_split_l, sub_split_r] = split_half(arr);
  
    const split_left = mergeSort(sub_split_l);
    const split_right = mergeSort(sub_split_r);
  
    return sort(split_left, split_right);
  }
  
  function sort(left, right){
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  console.log(mergeSort([1, 2, 3, 4, 5, 6, 7]));
  