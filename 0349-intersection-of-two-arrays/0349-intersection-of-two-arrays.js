/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let map1 = new Map();
    for(let num of nums1){
        if(!map1.has(num))
            map1.set(num, 1);
    }
    let map2 = new Map();
    for(let num of nums2){
        if(!map2.has(num))
            map2.set(num, 1);
    }
    let res = [];
    map1.forEach((e,i)=>{
        if(map2.has(i)) res.push(i);
    })
    return res;
};