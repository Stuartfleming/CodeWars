function wordsToMarks(string){
  let total = 0
  for ( let i = 0; i < string.length; i++){ total +=  string.charCodeAt(i)- 96 }
  return total
}