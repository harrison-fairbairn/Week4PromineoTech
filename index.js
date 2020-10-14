// Question 1)
// Create an array called ages that contains
// the following values: 3, 9, 23, 64, 2, 8, 28, 93.

var ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Question 1 Part A)
// Programmatically subtract the value of the first element in the array from the value in the last
// element of the array (do not use numbers to reference the last element, 
// find it programmatically, (ages[7] – ages[0] is not allowed). Print the result to the console.

const answer1A = ages[ages.length - 1] - ages[0];  /// Expressions are things that can be evaluated
console.log(ages[ages.length - 1] - ages[0]);
// This will console log 90, since 93 - 3 = 0

// Question 1 Part B)
// Add a new age to your array and repeat the step above to 
// ensure it is dynamic (works for arrays of different lengths).

ages.push(76);
console.log(ages[ages.length - 1] - ages[0]);
// This will console log 73, since it is 76 - 3. 76 being the last element of the array OR array.length - 1

// !!!!!!!! (NEED HELP)
// Question 1 Part C)
// Use a loop to iterate through the array and calculate the average age. Print the result to the console.

var sumOfArray = 0; 

    const someArray = [30, 40, 50];
    for(const index in someArray) {                    // For in loop
        sumOfArray = sumOfArray + someArray[index]     
    }                                                  
    console.log(sumOfArray / someArray.length);
// This will log 40 since (30+40+50) / 3 = 40

// Question 2)
// Create an array called names that contains the following values: 
// ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Question 2 Part A)
// Use a loop to iterate through the array and calculate the average number of letters per name.
// Print the result to console. (Screenshots in final submission)

var sumOfNames = 0; 

for (const index in names)  {
    console.log(names[index].length)
    sumOfNames = sumOfNames + names[index].length
}

console.log(sumOfNames / names.length);

// Question 2 Part B) 
// Use a loop to iterate through the array again and concatenate all the names together, 
// separated by spaces, and print the result to the console.

// var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; (reference)

let answer2B = ''
for (let i = 0; i < names.length; ++i) {
    answer2B += names[i] + ' '
}
console.log(answer2B);

// Question 3) How do you access the last element of any array?
// Answer 3) You use the - console.log(ages[ages.length - 1]) - bracket notation arrays.length - 1

// Question 4) How do you access the first element of any array?
// Answer 4) You can always reference or access the first element of the array by referring
// to it's location within the 'Array' which is 0. ( [0] )

// Question 5) Create a new array called nameLengths. Write a loop to iterate over the previously 
// created names array and add the length of each name to the nameLengths array. (MAP)

// var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; (for reference)

const nameLengths = names.map(function(element)  {
    return element.length;                          
});
console.log(nameLengths); 

// Question 6) Write a loop to iterate over the nameLengths array and calculate the sum of all 
// the elements in the array. Print the result to the console.

let answer6 = 0;
for (let i in nameLengths) {
    answer6 += nameLengths[i]
}
console.log(answer6); 

// Question 7) Write a function that takes two parameters, word and n, as arguments and 
// returns the word concatenated to itself n number of times. 
// (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function helloFunction(word, n)  {
    let emptyString = ''
    for (let i = 0; i < n; ++i) {
    emptyString += word
}
return emptyString;
}                                                     
let hiFunction = helloFunction('Hi', 3);
console.log(hiFunction);

// Question 8) Write  a function that takes two parameters, firstName and lastName, and returns a 
// full name (the full name should be the first and the last name separated by a space).

function twoParameters(firstName, lastName)  {
    console.log(firstName, + ' ' + lastName);
}
twoParameters('Harrison', 'Fairbairn');

// Question 9) Write a function that takes an array of numbers and returns true if the 
// sum of all the numbers in the array is greater than 100.

let gT = [22, 33, 12, 15, 31, 25, 9]
function arrayGreaterThan100() {
    if (gT[0] + gT[1] + gT[2] + gT[3] + gT[4] + gT[5] + gT[6] > 100)
    console.log('TRUE');
}

// Question 10) Write a function that takes an array of numbers and returns
// the average of all the elements in the array.
// For this I will be referencing the array 'ages' above. (var ages = [3, 9, 23, 64, 2, 8, 28, 93];)
let indexReference = 0;
function totalAverage() {
    if (index in ages) {
        indexReference = indexReference + ages[index];
    }

}
console.log(indexReference / ages.length);


// Question 11) Write a function that takes two arrays of numbers and returns true if the average 
// of the elements in the first array is greater than the average of the elements in the second array.
let overGreaterAverage = 0;
let array1 = [22, 33, 44, 55, 66, 77, 88, 99];           
let array2 = [13, 23, 41, 37, 12, 73, 56, 81];

for (const index in array1) {
    overGreaterAverage += array1[index]
}

// Question 12) Write a function called willBuyDrink that takes a boolean isHotOutside, and a number 
// moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

var isHotOutside = (true || false);
var moneyInPocket = 15;
function willBuyDrink() {
    if (isHotOutside === true && moneyInPocket > 10.50)
    console.log('TRUE');
}



// Question 13) Create a function of your own that solves a problem. 
// In comments, write what the function does and why you created it.
// _____________________________________________________________________
// Let's say you have a warehouse inventory of hats in boxes sorted by type (design, logo, name, etc.)
// You want to return a new array from your inventoryHatNames array that has only hats that start with the letter 'H'.
// I created this because I used to work in a hat warehouse XD. 

let inventoryHatNames = ['Astros', 'Houston', 'Dodgers', 'Ducks', 'Mariners', 'Seahawks', 'Bombers', 'Yankees', 'Hawks', 
'Heroes', 'Bears', 'Cubs', 'Mets', 'HedgeHogs', 'Hackers', 'Trojans', 'Sun Devils'];

let someThingEqual = inventoryHatNames.filter(function(hat){ 
    return hat.charAt(0) === 'H';
    
});
console.log(someThingEqual);
