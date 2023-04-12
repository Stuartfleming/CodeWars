function abbrevName(name){

  const firstLetters = name
    .split(' ')
    .map(word => word.charAt(0))
    .join('.');
    
  return firstLetters.toUpperCase();
}