// Code your solution in this file
function findMatching(array, sample) {
  const result = array.filter(name => name.toLowerCase === sample.toLowerCase);
  return result;
}
