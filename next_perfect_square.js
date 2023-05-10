function findNextSquare(sq) {
  let squareRootCeil = Math.ceil(Math.sqrt(sq))
  let squareRootFloor = Math.floor(Math.sqrt(sq))
 if (squareRootFloor == squareRootCeil){ return (squareRootCeil+1)**2}else{
   return -1};
}