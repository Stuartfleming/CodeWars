function getSize(width, height, depth){
let result = []
result.unshift(parseInt(`${2*((width * depth)+(height * depth)+(height * width))}`))
result.push(parseInt(`${width*depth*height}`));
  return result
}