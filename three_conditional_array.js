function isValidWalk(walk) {
  let north = 0
  let east = 0
  if ( walk.length == 10){
  for (let i = 0; i < walk.length ; i++) {if( walk[i] === 'n' ){ north += 1}
    else if ( walk[i] === 's') {north -= 1} else if ( walk [i] === 'e') { east += 1} 
                                          else if ( walk[i] === 'w'){ east -= 1}}
    if ( north == 0 && east === 0) {return true} else {return false}
  
} else {return false}}



/*

function isVavlidWalk(walk) {
var dx = 0
var dy = 0
var dt = walk.length

for var i = 0; i < walk.length; i++) {
switch (walk[i]) {
case 'n' : dy--; break
case 's' : dy++; break
case 'w' : dx--; break
case 'e' : dx++; break
}
}
return dt === 10 && dx === 0 && dy ===0
}