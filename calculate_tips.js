function calculateTip(amount, rating) {
let score = rating.toLowerCase()
let tip = 0
  if ( score == 'excellent') {tip = ( amount * 0.2)} else if ( score == 'great') {tip = (amount * 0.15) }
  else if ( score == 'good') {tip = ( amount  * 0.1)} else if ( score == 'poor'){tip = (amount * 0.05) }
  else if ( score == "terrible"){ tip = amount * 0} else { return 'Rating not recognised'}
 return Math.ceil(tip)  
}