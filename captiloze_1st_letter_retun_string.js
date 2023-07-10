var greet = function(name) {
  let lower = name.toLowerCase()
  let cap = lower[0].toUpperCase() + lower.substr(1, lower.length)
  return `Hello ${cap}!`

};