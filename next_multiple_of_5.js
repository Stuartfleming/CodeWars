function roundToNext5(n){
  let remainder = n % 5
  let result = 0
  if (n >0 ) {result = n + (5-remainder)} else { result = n + Math.abs(remainder)}
  if (remainder === 0) {return n} else {return result}
  }