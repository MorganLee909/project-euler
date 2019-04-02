/*
Author:  Lee Morgan
Last updated:  March 31, 2019

Some common functions for the Euler Project
*/

//Creates an array of primes smaller than 'max'
//Uses the Sieve of Erastosthenes
function getPrimes(max) {
    var sieve = []; 
    var primes = [];
    for (var i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (var j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

//Creates an array of primes, size of 'count'
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

//returns an array containing the prime factors of any number
function primeFactorization(num){
    //0 and 1 cannot be factored
    if(num === 1 || num === 0){
        throw "Does not have a prime factorization";
    }
    var primesArr = getPrimes(num);
    var factorization = [];
    var isPrime = false

    //If num = last num in array, it is already prime
    if(primesArr[primesArr.length - 1] === num){
        isPrime = true;
        factorization.push(num);
    }
    
    //If not prime, factor the integer until it is prime
    while(!isPrime){
        for(var i = 0; i < primesArr.length - 1; i++){
            if(num % primesArr[i] === 0){
                factorization.push(primesArr[i]);
                num /= primesArr[i];
                break;
            }
        }
        isPrime = primesArr.every(function(prime){
            return num % prime !== 0;
        });
    }
    return factorization;
}

module.exports = {primeFactorization};