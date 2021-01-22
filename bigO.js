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

/* instead of counting seconds it takes for a problem to execute, we can count the number of simple
 operations the computer needs to perform. This remains constant regardless of machine 
 
 const addUpTo = n =>{
    return n * (n + 1) / 2;
}
Only 3 operations in the problem above

const addUpTo = n =>{
    var sum = 0;
    for(let i = 0; i <= n; i++){
        sum += i;
    }
    return sum;
}
The problem above has the amount of operations dependent on the size of n
The number of operations grows roughly in proportion with the size of n
 
 */


 /* Big O allows us to formally talk about how the runtime of an algorithm
 grows as the inputs grow
 
 f(n) = n is linear
 f(n) = n^2 is quadratic(As n grows the runtime squares)
 f(n) = 1 is constant (runtime is always constant)




 An O(n) inside of an O(n) is O(n^2) This is often found in nested for loops

 const printAllPairs = n =>{
     for(var i = 0; i< n; i++) {
         for (var j = 0; j < n; j++){
             console.log(i, j);
         }
     }
 }

 When classifying algorithms in big O, constants do not matter
 For example:
 O(2n) is simplified to O(n)
 O(500) ===> O(1)
 O(13n^2) ===> O(n^2)
 O(1000n + 50) ===> O(n)

 Arithmetic operations are constant 
 Variable assignment is constant 
 Accessing elements in an array or object is constant
 In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop
 */