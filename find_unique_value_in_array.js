function stray(numbers) {
numbers.sort(function(a, b){return a-b});
  if (numbers[0] != numbers[1]) {return numbers.at(0)} else {return numbers.at(-1)}
}