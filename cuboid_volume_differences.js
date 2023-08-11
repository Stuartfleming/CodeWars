function findDifference(a, b) {
 
  
  let productA = a.reduce(firstTest);
  
function firstTest(acc,valueA){ 
 return acc * valueA};
  
   let productB = b.reduce(secondTest);
  
function secondTest(accu,valueB){ 
 return accu * valueB};
  

  return Math.abs(productA- productB) 
}