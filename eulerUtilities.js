/*
Author:  Lee Morgan
Last updated:  January 28, 2019

Some common functions for the Euler Project
*/
var startTime = process.hrtime();

var arr = primes(664579);
console.log("last prime:  "  + arr[arr.length-1]);
console.log("length  " + arr.length);

var endTime = process.hrtime(startTime);
console.info("Time:  %ds %dms", endTime[0], endTime[1] / 1000000);

function primeList(count){
    var arr =[2];
    for(var i = 3; i <= count; i+=2){
        arr.push(i);
    }

    for(var i = 0; i < arr.length; i++){
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] % arr[i] === 0){
                arr.splice(j, 1);
            }
        }
    }

    return arr;
}

function primes(count){
    var arr = [2];
    var num = 3;
    while(arr.length !== count){
        var isPrime = true;

        for(var i = 0; arr[i] <= Math.sqrt(num); i++){
            if(num % arr[i] === 0){
                isPrime = false;
            }
        }

        if(isPrime){
            arr.push(num);
        }

        num +=2;
    }

    return arr;
}

function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}