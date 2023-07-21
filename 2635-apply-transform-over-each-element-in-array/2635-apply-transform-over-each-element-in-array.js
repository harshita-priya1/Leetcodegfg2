/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    return arr.reduce((arr2,e,i) => {
        arr2[i] = fn(e,i);
        return arr2;
    },[]);
};