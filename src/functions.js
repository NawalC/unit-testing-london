const functions = {

  removeMiddle: function( words ){
    // words is an array of strings
    // return a new array containing only the middle word
    // the words array should no longer contain the middle word
    // hint: splice
  },

  get2ndAnd3rd: function( myArray ){
    // myArray is an array of numbers
    // return an array containing the 2nd and 3rd items from myArray
    // myArray should remain unchanged
    // hint: filter
  },

  mapper: function( myArray ){
    // myArray is an array of numbers
    // return a new array which has all items in myArray incremented by one
    // myArray should remain unchanged
    // hint: map
  },

  wordLengths: function( words ){
    // words is an array of strings
    // return a new array that contains the number of letters in each word
    // hint: strings have a 'length' property
  },

  largerThanTen: function( numbers ){
    // numbers is an array of numbers
    // return a new array that contains only numbers from the input array which are greater than 10
  },

  even: function( numbers ){
    // numbers is an array of numbers
    // return a new array that contains only even numbers from the input array
    // hint: you may want to use the modulus operator '%'
  },

  findTheNeedle: function( words ){
    // words is an array of words
    // return the index of the word 'needle'
    // hint: indexOf
  },

  findLargest: function( numbers ){
    // numbers is an array of numbers
    // return the largest number from that array
    // hint: Math.max
  },

  buildTrain: function( numberOfCarriages ){

    const Train = function( numberOfCarriages ){
      this.numberOfCarriages = numberOfCarriages;
    }

    // return a new instance of Train which has the specified number of carriages
  },

  addMethod: function( bookTable ){
    const restaurant = {
      freeTables: 7
    };

    // make bookTable is a function. make it a method of restaurant

    return restaurant;
  }
};
