"use strict";

/*Powers of 2

Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

  Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]*/

console.log("---------Power of 2---------");

function powersOfTwo(n) {
  const result = [];
  const resultExpo = [];
  for (let i = 0; i <= n; i++) {
    result.push(i);
  }
  for (const number of result) {
    resultExpo.push(2 ** number);
  }
  console.log(resultExpo);
}

powersOfTwo(0);

/*
Reversed Words

DESCRIPTION:
Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):

"The greatest victory is that which requires no battle" -->
"battle no requires which that is victory greatest The"
*/

console.log("---------Reversed Words---------");

function reverseWords(str) {
  const splitString = str.split(" ");
  const reversedString = splitString.reverse();
  const joinArray = reversedString.join(" ");
  console.log(joinArray);
}

reverseWords("The greatest victory is that which requires no battle");

/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/
function removeExclamationMarks(s) {
  return s.split("!").join("");
}

removeExclamationMarks("I!Am a good! Developper!");

/*
We want an array, but not just any old array, an array with contents!

  Write a function that produces an array with the numbers 0 to N-1 in it.

  For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value.
*/

console.log("---------Filling an array (part 1)---------");

function arr(n = 0) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(i);
  }
  console.log(result);
}

arr(5);
arr(0);
arr();

//Given a number n, return the number of positive odd numbers below n, EASY!

//Examples (Input -> Output)
//7  -> 3 (because odd numbers below 7 are [1, 3, 5])
//15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
//Expect large Inputs!

//Given a number n, return the number of positive odd numbers below n, in minimum time!

console.log("---------Count Odd Numbers below n---------");

function oddCount(n) {
  if (n % 2 === 0) {
    console.log(n / 2);
  } else {
    console.log((n - 1) / 2);
  }
}

oddCount(7);

/*
Messi goals function
Messi is a soccer player with goals in three leagues:

  LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

  Note: the input will always be valid.

  For example:

  5, 10, 2  -->  17
  */

console.log("---------Messi goals function---------");

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

/*
Very simple, given an integer or a floating-point number, find its opposite.

  Examples:

1: -1
14: -14
-34: 34
*/

console.log("---------Opposite number---------");

function opposite(number) {
  return -number;
}

/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most
secret question is still correct. However, since someone could look over your shoulder,
you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

  Examples
"4556364607935616" --> "############5616"
"64607935616" -->      "#######5616"
"1" -->                "1"
"" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"
*/

console.log("---------Credit Card Mask---------");

function maskify(cc) {
  const output = cc
    .split("")
    .slice(cc.length > 4 ? -4 : -cc.length)
    .join("")
    .padStart(cc.length, "#");
  console.log(output);
}

maskify("");

// Your task is to write function factorial.
//
// https://en.wikipedia.org/wiki/Factorial

console.log("---------Factorial---------");

function factorial(n) {
  //your code here
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

factorial(5);
