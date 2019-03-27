/*
Author:  Lee Morgan
Last updated:  December 4, 2018

Translated from Java
Find the Pythagorean triple in which a+b+c=1000.  Return the product of abc
Improvement of other pythagorean triplet solver using Euclid's formula
    to find triples.  Slight speed improvement
*/

var startTime = process.hrtime();

var answer = 0;
for(var m = 1; m < 1000; m++){
    for(var n = 1; n < m; n++){
        var a = (m * m) - (n * n);
        var b = 2 * m * n;
        var c = (m * m) + (n * n);

        if((a + b + c) == 1000){
            answer = a * b * c;
        }
    }
}

var endTime = process.hrtime(startTime);

console.log("Answer:  " + answer);
console.info("Time:  %ds %dms", endTime[0], endTime[1] / 1000000);