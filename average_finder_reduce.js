var findAverage = function (nums) {
 return (nums.reduce(
  (acc, curr) => acc + curr
))/nums.length;   
}