function mergeArrays(arr1, arr2) {
  newArray = arr1.concat(arr2)
  let uniqueChars = [];

  newArray.forEach((element) => {
    if (!uniqueChars.includes(element)) {
        uniqueChars.push(element);
    }
});
  uniqueChars.sort(function(a, b){return a-b})
  return uniqueChars
}