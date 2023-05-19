function position(letter){
let ascii = letter.charCodeAt();
      if(ascii >= 97 && ascii <= 122){
         return `Position of alphabet: ${(ascii - 96)}`;
      };
}