/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let ans = [];
    for(let i=0;i<arr.length;){
        let a=[]; 
        let k=i;
        for(let j=i;j<k+size&&j<arr.length;j++){
            a.push(arr[j]);
            i=j+1;
        }
        ans.push(a);
    }
    return ans;
};
