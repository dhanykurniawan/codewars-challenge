// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers) {
  const numArray = numbers.split(" ").map(Number);
  const max = Math.max(...numArray);
  const min = Math.min(...numArray);
  return `${max} ${min}`;
}
