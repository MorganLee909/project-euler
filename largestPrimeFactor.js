/*
Author:  Lee Morgan
Last updated:  December 4, 2018

Translated from Java
Project Euler #3
Finds the largest prime factor of a number.
*/

var startTime = process.hrtime();

var num = 600851475143;
for(var i = 1; i < num; i++){
    if(num % i == 0){
        num /= i;
    }
}

var endTime = process.hrtime(startTime);

console.log("Answer:  " + num);
console.info("Time:  %ds %dms", endTime[0], endTime[1] / 1000000);