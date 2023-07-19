function vowelIndices(word){
  let solution = []
  word = word.toLowerCase()
  for (let i = 0; i <= word.length; i++) { if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] == 'o'
                                               || word[i] == 'u' || word[i] =='y')
    {solution.push(i+1)}
}
  return solution}