function sumOfDifferences(arr) {
  let total = 0
  arr.sort(function(a,b){return b-a})
  for( let i  = 1; i < arr.length; i++){ total = total + ( arr[i -1] - arr[i])}
  return total
}