// Do not change any of the function names

//Example 1:
function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x >= y) {
    return x;
  } else {
    return y;
}
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  var language = "German";
  if (language === "German"){
    return "Guten Tag!";
  }
  else if (language === "Mandarin"){
    return "Ni Hao!";
  }
  else if (language === "Spanish"){
    return "Hola!";
  }
  else {
    return "Hello!";
  }
}
console.log(greeting('language'))

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  var num = 10;
  if (num === 10){
    return true;
  }
  else if (num === 5){
    return true;
  }
  else { 
    return false;
  }
}
console.log(isTenOrFive('num'))


function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
  var num = 45;
  if (num<50 && num>20){
    return true;
  }
  else {
    return false;
  }
}
console.log(isInRange('num'))

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  var num = 4.5 ;
  if (num === (Math.floor(num))) {
    return true;
  }
  else {
    return false;
  }
}
console.log(isInteger('num'))

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  var num = 15;
  if (num % 3 == 0 && num % 5 == 0){
    return "fizzbuzz";
  }
  else if (num % 3 == 0){
    return "fizz";
  }
  else if (num % 5 == 0){
    return "buzz";
  }
  else {
    return num;
  }
}
console.log(fizzBuzz('num'))

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  var num = 5;
  if (num===1)
{
  return false;
}
else if(num === 2)
{
  return true;
}else
{
  for(var i = 2; i < num; i++)
  {
    if(num % i === 0)
    {
      return false;
    }
  }
  return true;  
}
}
console.log(isPrime('num'))
// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
};