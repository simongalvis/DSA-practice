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

console.log(twoSum([3,2,3], 6))