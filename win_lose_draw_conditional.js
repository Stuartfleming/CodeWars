function uefaEuro2016(teams, scores){
  let homeTeam = teams[0]
  let winner = 0
  if ( scores[0] == scores[1]){ return `At match ${teams[0]} - ${teams[1]}, teams played draw.`} 
 else if ( scores[0] > scores[1]) { winner = teams[0]} else { winner = teams[1]}
    return `At match ${teams[0]} - ${teams[1]}, ${winner} won!`
  }