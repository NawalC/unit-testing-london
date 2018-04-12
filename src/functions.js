function removeMiddle( words ){
  return words.splice(words.length/2,1);
  // words is an array which contains an odd number of strings
  // return a new array containing only the middle word
  // the words array should no longer contain the middle word
  // hint: splice
}

function get2ndAnd3rd( myArray ){
  return myArray.slice(1,3);  //string.slice(start, end)
  // myArray is an array of numbers
  // return an array containing the 2nd and 3rd items from myArray
  // myArray should remain unchanged
  // hint: slice
}

function mapper( myArray ){

  let newArray = myArray.map(function(i){
    return i +=1;
  })
  return newArray
  // myArray is an array of numbers
  // return a new array which has all items in myArray incremented by one
  // myArray should remain unchanged
  // hint: map
}

function wordLengths( words ){
   for ( i=0; i < words.length; i++){
     words[i]=words[i].length;
   }
   return words;
  // words is an array of strings
  // return a new array that contains the number of letters in each word
  // hint: strings have a 'length' property
}

function cities( capitals, formatter ){

  for (i=0; i<capitals.length; i++){
    capitals[i]= formatter(capitals[i]);
  }
  return capitals;
  // capitals is an array of objects that have a city and country property
  // for example
  // {
  //   city: 'Paris',
  //   country: 'France'
  // }
  // formatter is a function that transforms a capital object into a sentence returns it
  // such as 'Paris is the capital of France'

  // apply formatter to each object in capitals array and return an array of resulting sentences
}

function largerThanTen( numbers ){
  let newArray = numbers.filter(function(num){
 return num > 10;
 })

 return newArray;
  // numbers is an array of numbers
  // return a new array that contains only numbers from the input array which are greater than 10
  // hint: filter
}

function even( numbers ){
  let evenNum = [];
  for(var i=0; i<=numbers.length; i++)
  if (numbers[i] % 2 == 0) {
    evenNum.push(numbers[i]);
  } else { continue }
  return evenNum;
};



  // numbers is an array of numbers
  // return a new array that contains only even numbers from the input array
  // hint: you may want to use the modulus operator '%'


function findTheNeedle( words ){
  return words.indexOf('needle');
  // words is an array of words
  // return the index of the word 'needle'
  // hint: indexOf
}

function findLargest( numbers ){
  return Math.max(...numbers);
  // numbers is an array of numbers
  // return the largest number from that array
}

function addAllnumbers( numbers ) {
  
  return numbers.reduce( (accumulator, currentValue) => accumulator + currentValue );
  // numbers is an array of numbers
  // return the sum of all the numbers in the array
}
function average( things ) {
  // things is an array of numbers and strings
  // return the average of all the numbers
  // be sure to exclude the strings
}

function paintShop( cars, colour ){
  // cars is an array of objects that have 
  // their properties are `make`, `model` and `colour`

  // for example
  // {
  //   make: 'Ford',
  //   model: 'Fiesta',
  //   color: 'red'
  // }

  // set the colour of each Ford car to be the colour 
  // passed in and return the new array

  // the original array passed in should not change
  // hint: look up 'Cloning objects in JavaScript'
}

function sales( cars ){
  // cars is an array of objects that have been sold
  // their properties are `make`, `model`, `colour` and `price`

  // for example
  // {
  //   make: 'Ford',
  //   model: 'Fiesta',
  //   color: 'red',
  //   price: 5999
  // }

  // calculate and return the total sales for each make and return the totals
  // the output should like a bit like

  // {
  //   'Ford': 20000,
  //   'Vauxhall': 15000
  // }
}

// Harder challenges
function secondLargest( numbers ){
  // numbers is an array of numbers
  // return the index of the second 
  // largest number in the array
}

function factorial( int ) {
  // int is an integer
  // a factorial is the product of all non-negative integers
  // less than or equal to the iniital number.

  // for example the factorial of 5 is 120
  // 120 = 1 * 2 * 3 * 4 * 5

  // calculate and return the factorial of int
  // note: factorial of 0 is 1
}

module.exports = {
  removeMiddle,
  get2ndAnd3rd,
  mapper,
  wordLengths,
  cities,
  largerThanTen,
  even,
  findTheNeedle,
  findLargest,
  addAllnumbers,
  average,
  paintShop,
  sales,
  secondLargest,
  factorial
};
