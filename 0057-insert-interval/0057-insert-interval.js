/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, ni) {
    const res =[];
    for(const i of intervals){
        if(i[1]<ni[0]) res.push(i);
        else if(i[0]>ni[1]){
            res.push(ni);
            ni=i;
        }
        else{
            ni[0]= Math.min(ni[0],i[0]);
            ni[1]= Math.max(i[1],ni[1]);
        }
    }
    res.push(ni);
    return res;
};