/*
Author:  Lee Morgan
Last updated:  December 4, 2018

Translated from Java
Project Euler #4
Finds the largest palindrome made from the product of 2 3-digit numbers
Loops down through all three digit combinations and tests whether
    it is a palindrome.  Prints the largest one.
*/

var startTime = process.hrtime();

var product = 0;
var largestPalindrome = 0;
for(var i = 999; i > 0; i--){
    for(var j = 999; j > 0; j--){
        product = i * j;
        if(isPalindrome(product) && product > largestPalindrome){
            largestPalindrome = product;
        }
    }
}

function isPalindrome(num){
    var numStr = num.toString();
    var reverseNum = numStr.split('').reverse().join('');

    if(numStr === reverseNum){
        return true;
    }
    return false;
}

var endTime = process.hrtime(startTime);

console.log("Answer:  " + largestPalindrome);
console.info("Time:  %ds %dms", endTime[0], endTime[1] / 1000000);