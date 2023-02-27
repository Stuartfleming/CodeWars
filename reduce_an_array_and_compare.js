function betterThanAverage(classPoints, yourPoints) {
 let classPointsTotal = classPoints.reduce(reduction)
 
 function reduction(acc, a){
  return acc += a};
  classPointsTotal += yourPoints;

 let classPointAverage = classPointsTotal / (classPoints.length +1);
 
  if (yourPoints > classPointAverage) {return true } else { return false}
}
