function checkExam(array1, array2) {
 let total = 0 
  for ( let i = 0 ; i < array1.length ; i++){ if ( array2[i] == ''){ total += 0} 
                                             else if ( array1[i] == array2[i]){ total += 4}
                                             else { total -= 1}};
  if (total <= 0){ return 0} else { return total}
}