/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {

    let result = nums.map(nums => nums * nums);

    result.sort((a,b)=> a - b);

    return result;
};