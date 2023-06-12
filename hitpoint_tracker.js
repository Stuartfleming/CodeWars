function combat(health, damage) {
  hp = health - damage
  if (hp <= 0) {return 0} else {return hp}
 }