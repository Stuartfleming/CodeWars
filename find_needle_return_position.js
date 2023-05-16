function findNeedle(haystack) {
  for ( let i = 0; i < haystack.length; i++){ if (haystack.includes("needle"))
  { return `found the needle at position ${haystack.indexOf('needle')}`}}
 }