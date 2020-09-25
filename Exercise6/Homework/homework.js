// Do not change any of the function names

//Example 1:
function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}
console.log(returnFirst(["Omen", "Brimstone", "Breach", "Phoenix"]))

function returnLast(arr) {
  // return the last item of the array
  return arr[arr.length -1];
}
console.log(returnLast(["Omen", "Brimstone", "Breach", "Phoenix"]))


function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}
console.log(getArrayLength(["Omen", "Brimstone", "Breach", "Phoenix"]))

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  for(var i=0; i < arr.length; i++){
    arr[i] = arr[i]+1;
  }
    return arr;
}
console.log(incrementByOne([1,2,3,4,5]))


function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  item = arr.push(item);
  return arr;
}
console.log(addItemToArray(["Omen", "Brimstone", "Breach", "Phoenix"], "Sage"))

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  item = arr.unshift(item);
  return arr;
}
console.log(addItemToFront(["Omen", "Brimstone", "Breach", "Phoenix"], "Sage"))

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  let a1= ['Strain', 'Block', 'it'];
  let a2= ['out', 'Omen!'];
  let a3= ['I', 'feel', 'the'];
  return words = a3.concat(a1, a2).join(' ');
}
console.log(wordsToSentence('word'))

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  let animals = ['Phantom', 'Ghost', 'Operator'];
  if (arr.includes(item, 0)) {
    return true;
  }
  else {
    return false;
  }
}
console.log(contains(['Phantom', 'Ghost', 'Operator'], 'Ghost'))


function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i];
  }
  return sum;
}
console.log(addNumbers(10, 5, 6, 9))


function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i];
  }
  return sum / arguments.length;
}
console.log(averageTestScore(10, 5, 6, 9))


function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  return Math.max.apply(null, numbers);
}
console.log(largestNumber([50, 5, 6, 9]))


function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  let sum = 1;
  for (let i = 0; i < arguments.length; i++) {
      sum *= arguments[i];
  }
  return sum;
}
 console.log(multiplyArguments(10,5,6,9))

// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
  multiplyArguments,
};