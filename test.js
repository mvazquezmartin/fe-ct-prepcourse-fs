function findUniq(arr) {
  return arr.filter(
    (num) => arr.indexOf(num) === arr.lastIndexOf(num)
  )[0];
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
