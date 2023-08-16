/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let mx=nums[0];
    let sm =0;
    nums.forEach((n)=>{
        sm+=n;
        mx = Math.max(sm,mx);
        if(sm<0) sm=0;
    });
    return mx;
};