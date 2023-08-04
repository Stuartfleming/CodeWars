function toNumberArray(stringarray){
  let arr = []
  for ( let i = 0; i < stringarray.length ; i++) {if (stringarray[i] % 1 == 0) { arr.push(parseInt( stringarray[i]))}
                                                 else {arr.push(parseFloat( stringarray[i]))}}
  return arr
}