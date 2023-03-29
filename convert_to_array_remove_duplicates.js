var uniqueInOrder=function(iterable){
  let array = []
   for ( let i = 0; i < iterable.length; i++){
    if ( iterable[i] !== iterable[i+1]) {array.push(iterable[i])
  }

} return array }