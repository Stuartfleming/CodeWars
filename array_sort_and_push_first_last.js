function minMax(arr){
  arr.sort((a,b) => a-b)
  let result = []
result.push(arr.at(0,))
result.push(arr.at(-1))
 return result
}