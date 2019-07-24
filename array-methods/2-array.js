var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.

var num = 0;
var longestString = "";
words.forEach(function(element) {
  if (element.length > num) {
    num = element.length;
    longestString = element;
  }
});



var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.

numbers1.reduce((acc , cv) =>{
    acc = acc + cv;
    return acc;
}, 0)


var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
function average(){
	let avg = numbers2.reduce((acc , cv) => {
        acc += cv;
        return acc;
})
	return avg / numbers2.length;
}

average();

var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.


var wordLength = 0;
function avg(words2) {
  words2.forEach(function(element) {
    wordLength += element.length;
  });
  var wordAvg = wordLength / words2.length;
  return wordAvg;
}
avg(words2);
