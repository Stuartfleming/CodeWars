function evaporator(content, evap_per_day, threshold){ 
  let days  = 0
  let current = content
  let loss  = (100 - evap_per_day) / 100
  while ( current >= content * threshold / 100) { current  = current * loss; days++};
  return days;
}