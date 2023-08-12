/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
      return nums.reverse().reduceRight((val, num) => fn(val, num), init);
};