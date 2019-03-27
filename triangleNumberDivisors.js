/*
Author:  Lee Morgan
Last updated:  December 24, 2018

Project Euler #12
Find the first triangle number with 500 divisors

Unfinished
*/

var startTime = process.hrtime();

var triangleNumber = 0;
for(var i = 1; i < 5000; i++){
    triangleNumber += i;
}

function findPrimeFactorization(num){

}

var endTime = process.hrtime(startTime);

console.log("Answer:  " + answer);
console.info("Time:  %ds %dms", endTime[0], endTime[1] / 1000000);