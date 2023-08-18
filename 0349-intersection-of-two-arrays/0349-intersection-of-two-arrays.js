/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let s = new Set();
    let res=[];
    for(let i of nums1){
        s.add(i);
    }
        for (let i of nums2)
            if (s.has(i)) {
                res.push(i);
                s.delete(i);
            }
        return res;
};