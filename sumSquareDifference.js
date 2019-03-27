/*
Author:  Lee Morgan
Last updated:  December 7, 2018

Translated from Java
Project Euler #6
Find the difference between the sum of the squares of the first 100
numbers and the square of the sum
*/

var startTime = process.hrtime();

var sumSquares = 0;
var sum = 0;

for(var i = 1; i <= 100; i++){
    sumSquares += Math.pow(i, 2);
    sum += i;
}

var squareSum = Math.pow(sum, 2);
var answer = Math.abs(sumSquares - squareSum);

var endTime = process.hrtime(startTime);

console.log("Answer:  " + answer);
console.info("Time:  %ds %dms", endTime[0], endTime[1] / 1000000);