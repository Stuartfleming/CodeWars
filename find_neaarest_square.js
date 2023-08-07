function nearestSq(n){
  let root = Math.sqrt(n)
  let lowerRoot = (Math.floor(root))
  let upperRoot = (Math.ceil(root))
  let upperDiff = upperRoot - root
  let lowerDiff = root - lowerRoot
     if ( root % 1 == 0) { return n} else if ( upperDiff < lowerDiff){
    return upperRoot**2} else {return lowerRoot**2}
  }
    