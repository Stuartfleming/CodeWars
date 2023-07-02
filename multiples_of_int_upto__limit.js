function findMultiples(integer, limit) {
  let result = []
  let multip = 1
  while (integer * multip <= limit ) {result.push( integer * multip ); multip++}
  return result
}
