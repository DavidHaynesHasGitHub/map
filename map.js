var words = ["ground", "control", "to", "major", "tom"];

var resultA = words.map( word => {
    var modifiedA = word.length;
    return modifiedA
});

var resultB = words.map( word => {
    var modifiedB = word.toUpperCase();
    return modifiedB
});

var resultC = words.map( word => {
    var modifiedC = word.split('').reverse().join('');
    return modifiedC
});

console.log(resultA)
console.log(resultB)
console.log(resultC)

// map(words, function(word) {
//   return word.length;
// });
//
// map(words, function(word) {
//   return word.toUpperCase();
// });
//
// map(words, function(word) {
//   return word.split('').reverse().join('');
// });
