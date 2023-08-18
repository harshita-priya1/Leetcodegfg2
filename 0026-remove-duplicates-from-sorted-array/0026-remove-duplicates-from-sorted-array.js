/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let id=1;
    let val=nums[0];
    for(let i=1;i<nums.length;i++){
        if(val!==nums[i]){
            val=nums[i];
            nums[id]=val;
            id++;
        }
    }
    return id;
};