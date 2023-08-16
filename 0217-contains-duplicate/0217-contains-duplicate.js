/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const m = new Map();
    for(const e of nums){
        if(m.has(e)) return true;
        m.set(e,true);
    }
    return false;
};