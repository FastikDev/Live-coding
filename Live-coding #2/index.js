const getSensOfLife = () => 42;

console.log(getSensOfLife());

function getSensOfLife_2() {
  console.log(42);
}

const res = getSensOfLife_2();

getSensOfLife_2();
console.log(res);

/* ф-ция getSquared должна принимать число и вернуть квадрат этого числа */

function getSquared(num) {
  return num * num;
}
