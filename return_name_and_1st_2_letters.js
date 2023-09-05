function whoIsPaying(name){
  let init =  ""
  let arr = []
  if ( name.length > 2 ) {for ( let i  =0 ; i <=1 ; i++){ init += name[i]}arr.push(init);}
  arr.unshift(name);
   return arr
  }