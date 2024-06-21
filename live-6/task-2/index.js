/**
 * @param {number[]} transactions
 * @return {number}
 */

//algo v2
//1 filter exanpenses
//2 make positive
//3 sum

//algo v2
//1 iteration element
//2 sum expenses
//3 make sum pisitive

//reduce
//input: callback, this (opt), initValue(opt)
//output: any

//callback
//input: accum, elem, index(opt), array(opt)
//output: new accum (any)

function calcExpenses(transactions) {
  //opt 1
  //const res = transactions.reduce((acc, el, index) => {
    //console.log('Step' + index);
    //console.log('acc' + acc);
    //console.log('el' + el);

    //if (el < 0) {
      //acc += el;
   // }
    //return acc;
 // }, 0);
  // put your code here
  //console.log('res: ', res);
  //return Math.abs(res);
  
  //opt 2
  return Math.abs(transactions.reduce(acc, el) => (el < 0 ? acc + el : el), 0));
}

// examples
calcExpenses([25, 40, -74, 58, -100, -5]); // returns ==> 179
calcExpenses([5000, 450]); // returns ==> 0
