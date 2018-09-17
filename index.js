// Code your solution in this file
function findMatching(array, sample) {
  return array.filter(name => name.toLowerCase() === sample.toLowerCase());
}

function fuzzyMatch(array, sample) {
  return array.filter(name => name.substring(0,sample.length) === sample);
}

function matchName(array, sample) {
  
}
