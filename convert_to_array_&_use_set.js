function isIsogram(str){
  let arr = str.toLowerCase().split('')
    return new Set(arr).size == arr.length;
}
 