function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  let sharkS = 0 
  if ( dolphin == true) { sharkS = sharkSpeed / 2} else { sharkS = sharkSpeed};
  let myTime = pontoonDistance / youSpeed
  let sharkTime = sharkDistance / sharkS
  if ( myTime < sharkTime ) {return "Alive!"}else { return "Shark Bait!"}
}