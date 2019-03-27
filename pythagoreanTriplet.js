/*
Author:  Lee Morgan
Last updated:  December 5, 2018

Translated from Java
Project Euler #9
Find the Pythagorean triple in which a+b+c=1000
Return the product of abc
Slower, brute force method
*/

var startTime = process.hrtime();

function findTriplet(){
    for(var a = 1; a <= 998; a++){
        for(var b = 1; b <= 998; b++){
            var c = 1000 - (a + b);
            if((Math.pow(a, 2) + Math.pow(b, 2)) == Math.pow(c, 2)){
                return a * b * c;
            }
        }
    }
}
var answer = findTriplet();

var endTime = process.hrtime(startTime);

console.log("Answer:  " + answer);
console.info("Time:  %ds %dms", endTime[0], endTime[1] / 1000000);