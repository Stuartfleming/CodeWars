function openOrSenior(data){
  let output = []
  for (let i = 0; i <data.length; i++){
    //for(let j = 0; j < data [i].length; j++) {
      if (data[i][0] >= 55 && data[i][1] > 7) {output.push('Senior')}
      else{ output.push('Open')}
   // }
  }return output
}