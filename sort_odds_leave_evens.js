function sortArray(array) {
  var odd = array
    .filter(n => n % 2)
    .sort((a, b) => a - b);
    
  return array.map(n => n % 2 ? odd.shift() : n);
}