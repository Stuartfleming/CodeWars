function evenNumbers(array, number) {
  let newArr =[]
  for ( let i = array.length;i>=0; i-- ) { if ( array[i] % 2 == 0 && newArr.length < number) {newArr.unshift(array[i])}}
  return newArr
  }