/*
Author:  Lee Morgan
Last updated:  December 4, 2018

Translated from Java
Project Euler #1
Find the sum of all multiples of 3 and 5 below 1000
*/

var startTime = process.hrtime();

var sum = 0;
for(var i = 3; i < 1000; i++){
    if(i % 3 == 0 || i % 5 == 0){
        sum += i;
    }
}

var endTime = process.hrtime(startTime);

console.log("Answer:  " + sum);
console.info("Time:  %ds %dms", endTime[0], endTime[1] / 1000000);