const {performance} = require('perf_hooks');

//Determines which algorithmic solution is most efficient and takes up the least amount of time
//Analyzes performance of algorithms by different measures

//Write a function that calculates the sum of all numbers from 1 up to some number n

/* const addUpTo = n =>{
    var sum = 0;
    for(let i = 0; i <= n; i++){
        sum += i;
    }
    return sum;
} */

const addUpTo = n =>{
    return n * (n + 1) / 2;
}


var time1 = performance.now();
addUpTo(10000000)
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2-time1)/1000} seconds`)
//Important: Write efficient code that is fast, takes up little space but is still easily readable