var capitals = function (word) {
  let positions = [];
for(let i=0; i<word.length; i++){
    if(word[i].match(/[A-Z]/) != null){
        positions.push(i);}}
      return positions
};