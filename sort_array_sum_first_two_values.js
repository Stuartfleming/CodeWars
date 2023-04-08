function sumTwoSmallestNumbers(numbers) {  
  let arrayNums = numbers || []
  arrayNums.sort(function(a,b){return a -b})
  sum  = arrayNums[0] + arrayNums[1]
  
  return sum
 
}