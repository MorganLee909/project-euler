/*
Author: Lee Morgan
Last updated:  December 4, 2018

Translated from Java
Project Euler #2
Finds the sum of all even-valued terms in the fibonacci sequence
    up to a value of 4 million
*/

var startTime = process.hrtime();

var prevNum = 1;
var curNum = 2;
var nextNum = 3;
var sum = 2;
var limit = 4000000;
while(nextNum <= limit){
    nextNum = prevNum + curNum;
    if(nextNum % 2 == 0){
        sum += nextNum;
    }
    prevNum = curNum;
    curNum = nextNum;
}

var endTime = process.hrtime(startTime);

console.log("Answer:  " + sum);
console.info("Time:  %ds %dms", endTime[0], endTime[1] / 1000000);