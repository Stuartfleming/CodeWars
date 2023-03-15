function solution(nums){
let arrayNums = nums || []
  arrayNums.sort(function(a, b){return a-b})
  return arrayNums
}
