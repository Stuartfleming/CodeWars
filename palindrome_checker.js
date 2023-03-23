function isPalindrome(x) {
  let reverso = x.split('').reverse().join('');
  if( reverso.toLowerCase() === x.toLowerCase()) {return true} else {return false}
}