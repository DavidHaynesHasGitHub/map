var words = ["ground", "control", "to", "major", "tom"];


// Yours will take in two arguments. The first will be an array to map and the second will be a callback function. The function will return a new array based on the results of the callback function.

function map(arr, mapFunction) {
var result = [];
    for(var element of arr) {
         result.push(mapFunction(element));
    }
    console.log(result);
    return result;
};

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
