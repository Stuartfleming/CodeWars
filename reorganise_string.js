function sortMyString(S) {
  let odds = ''
  let evens = ''
   for ( let i = 0; i < S.length; i++ ){ if (i % 2 == 0){ evens += S[i]} else { odds += S[i]}
                                      }let total = `${evens} ${odds}`
          return total;
}