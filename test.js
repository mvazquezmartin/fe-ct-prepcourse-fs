function stray(numbers) {
  return numbers.reduce((result, num) => result ^ num, 0);
}

console.log(stray([17, 17, 17, 3, 17, 17, 17]));
