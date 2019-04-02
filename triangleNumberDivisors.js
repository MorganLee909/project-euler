/*
Author:  Lee Morgan
Last updated:  March 31, 2019

Project Euler #12
Find the first triangle number with 500 divisors
Had to use outside code
*/

var startTime = process.hrtime();

//Cycle through each triangle number
var triangleSize = 0;
var triangleNumber = 1;
while(numberOfDivisors(triangleSize) < 500){
    triangleSize += triangleNumber;
    triangleNumber++;
}

//check the number of divisors for a specific number
function numberOfDivisors(num){
    var nod = 0;
    var sqrt = Math.floor(Math.sqrt(num));

    for(var i = 1; i <= sqrt; i++){
        if(num % i == 0){
            nod += 2;
        }
    }

    if(sqrt * sqrt === num){
        nod--;
    }

    return nod;
}

var endTime = process.hrtime(startTime);

console.log("Answer:  " + triangleSize);
console.info("Time:  %ds %dms", endTime[0], endTime[1] / 1000000);