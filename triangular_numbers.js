function sumTriangularNumbers(n) {
   let sum = 0
  if ( n <= 0) {return 0} else { 
    for (let i = 1; i <= n; i++)
       sum += i * ((i + 1) / 2); }
  return sum;
}