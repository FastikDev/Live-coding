// How to work on tech tasks. Step by step guide

// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?) ++
// 3. Write draft solution & testing - CODE
// 4. Refactoring & final testing -> final solution

//algo

//1. what is prime number? if  % 1 && num % num === 0
//2. if number === 1 return
//2. create if with condition from step 1.
//3. created function getPrime
//4. create counter
//5. add func option
//6. add loop for with interval 1 <= num
//7. write loop body
//8. create if with condition from step 2.
//9. white body in second if block what will happen when

function isPrime(n) {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function getPrime(number) {
  for (let n = 2; n <= number; n += 1) {
    if (isPrime(n)) {
      console.log(n);
    }
  }
}

getPrime(7);
