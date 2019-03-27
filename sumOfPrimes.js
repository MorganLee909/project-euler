/*
Author:  Lee Morgan
Last updated:  December 7, 2018

Translated from Java
Project Euler #10
Find the sum of all primes up to 2 million

Check every odd number starting at 3 for primeness
Check whether each number is divisible by all primes up to it's
square root
*/

var startTime = process.hrtime();

var primes = [];
primes.push(2);
var limit = 2000000;
var sum = 2;

var isPrime = false;
//loop through every odd number starting at 3
for(var i = 3; i < limit; i += 2){
    //loop through all primes in the list
    for(var j = 0; j < primes.length; j++){
        if(primes[j] > Math.sqrt(limit)){
            break;
        }
        if(i % primes[j] === 0){
            isPrime = false;
            break;
        }
        isPrime = true;
    }
    if(isPrime){
        primes.push(i);
        sum += i;
    }
}

var endTime = process.hrtime(startTime);

console.log("Answer:  " + sum);
console.info("Time:  %ds %dms", endTime[0], endTime[1] / 1000000);