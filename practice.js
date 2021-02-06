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
console.log(validAnagram('helloby', 'byehello'));