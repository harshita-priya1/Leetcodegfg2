/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n= nums.length;
    const l = Array(n).fill(0);
    const r = Array(n).fill(0);
    const o = Array(n).fill(0);
    l[0]=nums[0];
    r[n-1]=nums[n-1];
    for(let i=1;i<nums.length;i++){
        l[i]=nums[i]*l[i-1];
    }
    for(let i=n-2;i>=0;i--){
        r[i]=nums[i]*r[i+1];
    }
    o[0]=r[1];
    o[n-1]=l[n-2];
    for(let i=1;i<nums.length-1;i++){
        o[i]=l[i-1]*r[i+1];
    }
    return o;
};