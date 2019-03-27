/*
Author: Lee Morgan
Last updated:  December 4, 2018

Translated from Java
Project Euler # 7
Find the nth prime number

Still needs fixing
*/

var startTime = process.hrtime();

var primes = [];
primes.push(2);
var num = 3;

//Loop through every odd number
while(primes.length != 10001){
    var primeSquare = Math.sqrt(num);
    //Check if number is prime
    for(var i = 0; i < primes.length; i++){
        //If it can be divided, it is not a prime, throw it out
        if(num % primes[i] == 0){
            break;
        }
        //If all primes less than primeSquare have been checked, add to list
        if(primes[i] > primeSquare){
            primes.push(num);
            break;
        }
    }

    num += 2;
}

var endTime = process.hrtime(startTime);

console.log("Answer:  " + primes[primes.length - 1]);
console.info("Time:  %ds %dms", endTime[0], endTime[1] / 1000000);