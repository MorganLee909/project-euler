/*
Author:  Lee Morgan
Last updated:  December 5, 2018

Translated from Java
Project Euler #5
Find the smallest number divisible by all numbers 1 through 20
*/

var startTime = process.hrtime();

var num = 2520;
while(!checkMultiple(num)){
    num += 20;
}

function checkMultiple(num){
    for(var i = 1; i < 20; i ++){
        if(num % i != 0){
            return false;
        }
    }
    return true;
}

var endTime = process.hrtime(startTime);

console.log("Answer:  " + num);
console.info("Time %ds %dms", endTime[0], endTime[1] / 1000000);