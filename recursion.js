//Recursion

//Check for odd number
function checkForOdd(arr){
    //base case
    if(!arr.length){
        console.log("No more values to assess")
        return;
    }
    //recursion
    if (arr[0] % 2 != 0){
        console.log("Odd!");
        arr.shift();
    }
    else {
        console.log("Not odd!");
        arr.shift();
    }
    checkForOdd(arr);
}
//console.log(checkForOdd([4,3,4,5,6,7,8,9,100,100,100]));

//Calculate the sum of a range of numbers
function sumRange(num){
    if(num === 1){
        return 1;
    }
    return num + sumRange(num - 1);
}

//console.log(sumRange(7));

//Factorial
function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num -1);
}

//console.log(factorial(7))


//Exponent function
function power(base, exp){
    //base
    if(exp === 0) return 1;
    
    //recursion
    return base * power(base, exp -1)
}

console.log(power(2, 0))