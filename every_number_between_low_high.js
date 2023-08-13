function pipeFix(numbers){
  var min = numbers[0];
  var max = numbers[numbers.length - 1];
  var array = [];
  
  for(var i = min; i<=max; i++)
  {
    array.push(i);
  }
    return array;
}