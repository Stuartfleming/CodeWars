function enough(cap, on, wait) {
  if((wait + on) > cap) {return (wait + on) - cap }
  else return 0
}