/**
 * @param {number[]} results
 * @return {string[]}
 */

//map
//input callback, this
//output: new Array

//callback
//int: elem
//out: new elem

//opt1
// const getStatuses = results => {
//   results.map(function(el, index, array) {
//     if(elem >= 90) {
//       return 'Passed';
//     } else {
//       return 'Failed';
//     }
//   });

//   return getStatuses;
// }

//opt 2

//valide
//algo v1
//1 filtel not valid elem
//2 if lenght > 0 return null

const getStatuses = results => {
  if (results.some(el => el < 0 || el > 100)) {
    return null;
  }

  return results.map(el => el >= 90 ? 'Passed' : 'Failed');
}

console.log(getStatuses([25, 40, 74, 58, 100, 5]));
console.log(getStatuses([1000, 450]));              
console.log(getStatuses([]));                       
