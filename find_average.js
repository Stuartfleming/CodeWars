function findAverage(array) {
  let number = 0
  for (let i = 0; i < array.length; i++){
    number += array[i]
  }
  // your code here
  if(number > 0 ){return (number/array.length)}else {return 0};
}