
//input: arr, callback
//output: arr

//callback
//input: elem, index, array
//output: bolean

//algo v1
//0 create empty array
//1 iteration array
//2 apply callback for each el
//if callback = true => push to new Array

const filterArrayElements = (arr, callback) => {
  // put you code here
  const res = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }

  return res;
};

//test 

const test = [1, 10, 5, 7];
console.log(filterArrayElements(test, el => 
  el > 5));
