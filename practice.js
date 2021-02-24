const LinkedList = require("./LinkedList/SinglyLinkedList")
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
  */

 
  var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        let index1 = i;
        for(let j = 0; j < nums.length; j++){
            let index2 = i + (j+1);
        if(nums[index1] + nums[index2] == target){
            return [index1, index2]
        }
    }
    }
};

//console.log(twoSum([3,2,3], 6))

/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.


var arr = [1,2,3,4,5,7];
//arr.reverse();
console.log(arr.reverse());
*/

var addTwoNumbers = function(l1, l2){
   var reversed1 = parseInt(l1.reverse().join(''));
   var reversed2 = parseInt(l2.reverse().join(''));

   var reversedSum = reversed1 + reversed2;
   //make reversedsum into array reversed
   var reversedSumArr = [];
   for(let i = reversedSum.toString().length; i > 0; i--){
    reversedSumArr.push(parseInt(reversedSum.toString()[i-1]))
    
   }

    return   reversedSumArr;
}




//console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));

/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order. */

/* var isValid = function(s) {
    
    for(let i=0; i < s.length; i++){
        var count = 0;
        for(let j=0; j < s.length; j++){
            if(s[j] ===s[i]){
                count++;
                
            }
            console.log(count)
    }
        if(count%2 !== 0){
            return false;
        }
    }
    return true;
};
console.log(isValid('()')) */

/* 
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
 */

function findOdd(A) {
    for(let i= 0; i < A.length; i++){
      var count = 0;
      for(let j= 0; j < A.length; j++){
        if(A[i] === A[j]){
          count++;
        }
      }
      if (count % 2 !== 0){
        return A[i]
      }
    }
    return 0;
  }
  //console.log(findOdd([1,2,3,1,2,3]))

  /* 
  Check to see if a string has the same amount of 'x's and 'o's. 
  The method must return a boolean and be case insensitive. The string can contain any char.
   */

  function XO(str) {
    //code here
  var lowerStr = str.toLowerCase();
  
  var xCount = 0;
  var oCount = 0;

  for(let i=0; i<str.length; i++){
    if (lowerStr[i] === 'x'){
      xCount++;
    }
    else if(lowerStr[i] === 'o'){
      oCount++;
    }

  }
  if (xCount !== oCount){
    return false
  }
else return true;

}


//console.log(XO('XXXXXxOOOOOO'))

var obj = {};
obj['cadence'] = 33;
//console.log(obj);

function same(arr1, arr2){
  var numSquares = 0;
  for(let i=0; i<arr1.length; i++){
    
    for(let j=0; j<arr2.length; j++){
      
      if(arr2[j] === (arr1[i]*arr1[i])){
        numSquares++;
       // console.log('happened with ' + arr1[i])
      }
    }
   // console.log(numSquares)
   // console.log(arr1.length)
    
  }
  if(numSquares !== arr1.length){
    return false
  } 
  return true
}
//console.log(same([1,2,3], [4,1,9]))


function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  let obj1 = {};
  for(let char of str1){
      obj1[char] = (obj1[char] || 0) + 1;
  }
  let obj2 = {};
  for(let char of str2){
      obj2[char] = (obj2[char] || 0) + 1;
  }


  for(let key in obj1){
    if(obj2[key] !== obj1[key]){
      return false
    }
    
  }
  return true;
}
//console.log(validAnagram('anagram', 'nagara'));


//Multiple pointers pattern
/* 
Example: Write a function called sumZero which accepts a sorted array of integers. THe function should find the first pair
where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
*/
function sumZero(arr){
  let left = 0;
  let right = arr.length - 1;
  while (left < right){
    let sum = arr[left] + arr[right];
    if(sum === 0){
      return [arr[left], arr[right]];
    }
    else if(sum > 0){
      right--;
    }
    else left++;

  }
}


//console.log(sumZero([-4,-3,-2,0,1,3,10]))

/* 
countUniqueValues: Implement a function called countUniqueValues, which accepts a sorted array, and counts the 
unique values in the array. There can be negative numbers in the array, but it will always be sorted.
*/

function countUniqueValues(arr){
  let p1 = 0;
  let p2 = 1;
  let uniqueValues = 0;

  if(arr.length){
    uniqueValues=1;
  }
  while(p2 < arr.length){
    
    if(arr[p2] != arr[p1]){
      uniqueValues++;
      
    }
    p2++;
    p1++;
  }
  return uniqueValues;
}

//console.log(countUniqueValues([]))
//console.log('hello')

//Sliding Window 
/* Write a function called maxSubarraySum which accepts an array of integers and a number called n.
The function should should calculate the maximum sum of n consecutive elements in the array. */

function maxSubarraySum(arr, num){
let maxSum = 0;
let tempSum = 0;
if(arr.length < num) return null;

  for(let i = 0; i<num; i++){
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for(let i = num; i < arr.length; i++){
    tempSum = tempSum - arr[i-num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
//console.log(maxSubarraySum([1,2,1,1], 3))


//Divide and Conquer
/*
Given a sorted array of integers, write a function called search, that accepts a value and returns the
index where the value passed to the function is located. If the value is not found, return -1 
*/

function search(array, val){

  let min = 0;
  let max = array.length -1;

  while(min <= max){
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if(array[middle] < val){
      min = middle + 1;
    }
    else if (array[middle] > val){
      max = middle - 1;
    }
    else{
      return middle;
    }
  }
  return -1;
}


const ll = new LinkedList();

ll.insertAtHead(10);
ll.insertAtHead(20);
ll.insertAtHead(30);

console.log(ll);