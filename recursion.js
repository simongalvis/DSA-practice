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
console.log(checkForOdd([4,3,4,5,6,7,8,9,100,100,100]));