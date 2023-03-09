function doubleChar(str) {
   let stri = str.split('').map(function(v) {
    // iterate and update
    return v + v;
    // join the updated array
  }).join('');
  return stri

}
