/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    nums.sort((a,b)=> a-b);
    let count = 0;
    let l = 0;
    let r = nums.length-1;
    while(l<r){
        if(nums[l] + nums[r] < target){
            count += r-l;
            l++;
        }
        else{
            r--;
        }
    }
    return count;
};