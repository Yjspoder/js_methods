// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
Math.max(...numbers);

// Find longest string in strings
function longestStr(arr){
    var longest = "" ;
    for (i = 0 ; i < arr.length ; ++i){
        if (arr[i].length > longest.length){
            longest = arr[i];
        }
    }return longest;
}
longestStr(strings);
// Find all the even numbers

for (i = 0 ; i < numbers.length ; ++i){
    if(numbers[i] % 2 == 0){
        console.log(numbers[i])
    }
}

// Find all the odd numbers
for (i = 0 ; i < numbers.length ; ++i){
    if(numbers[i] % 2 == 1){
        console.log(numbers[i])
    }
}
// Find all the words that contain 'is' use string method 'includes'

function strIncludes(){
	    for (i = 0 ; i < strings.length ; ++i){
             if (strings[i].includes("is")){
                console.log(strings[i]);
            }
        }
    }

strIncludes(strings);
// Find all the words that contain 'is' use string method 'indexOf'
function strIncludes(){
		for (i = 0 ; i < strings.length ; ++i){
   			 if (strings[i].indexOf("is") != -1){
       			 console.log(strings[i]);
    		}
		}
	}

strIncludes(strings);

// Check if all the numbers in numbers array are divisible by three use array method (every)

function NumberBy3(){
    return (numbers[i] % 3 == 0);
}

console.log(numbers.every(NumberBy3));// false

//  Sort Array from smallest to largest

function sortNum(a , b){
        return a - b;
}
numbers.sort(sortNum);

// Remove the last word in strings
strings.pop();

// Add a new word in the array
strings.push("word");

// Remove the first word in the array
strings.shift();

// Place a new word at the start of the array use (upshift)
strings.unshift("this");

// Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3 , 7));

// Make a subset of strings array ['a','collection']
console.log(strings.slice(3 , 4));

// Replace 12 & 18 with 1221 and 1881
numbers.splice(1 , 1 , 1221);

numbers.splice(3 , 1 , 1881);

// Replace words with string in strings array
strings.splice(5 , 1 , "string")

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
function findJ(){
  return customers.filter( (obj) => obj.firstname[0] === "J");
}

// Create new array with firstname and lastname
function arr(){
    return customers.map((elm) => elm);
}

arr();

// Sort the array created above alphabetically

