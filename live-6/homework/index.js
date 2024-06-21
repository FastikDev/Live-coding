//input: arr, callback
//output: arr

//callback
//input: elem, index, array
//output: elem

//algo
//1 iteration array
//2 apply the callback function to the current element and save the result
//push new elem

const mapArrayElements = (arr, callback) => {
  const res = [];

  for (let i = 0; i < arr.length; i += 1) {
    const elem = callback(arr[i], i, arr);
    res.push(elem);
  }

  return res;
};

// Test

const numbers = [1, 4, 6, 8, 9];

const mult = mapArrayElements(numbers, num => num * 3);

console.log(mult);  // [3, 12, 18, 24, 27]
