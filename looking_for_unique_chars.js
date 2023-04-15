function duplicateEncode(word){
   
let lowercase = word.toLowerCase();
let unique = '';
  for (var i = 0; i < lowercase.length; i++) {
    if (lowercase.lastIndexOf(lowercase[i]) === lowercase.indexOf(lowercase[i])) {
      unique += '(';
    } else
    unique += ')';
  }
  return unique;

}
