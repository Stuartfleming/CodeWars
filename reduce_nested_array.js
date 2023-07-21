function stairsIn20(s){
  let flatS =s.flat();
  return  flatS.reduce((a, b) => a + b, 0) *20
}