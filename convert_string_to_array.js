function stringToArray(string){
 let arr = [ ]
arr.push( string.split(' '))
return arr.flat()
}