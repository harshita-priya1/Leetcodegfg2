/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a,b)=> a[0]-b[0]);
    const res=[];
    let p = intervals[0];
    for(const i of intervals){
        if(p[1]>=i[0]) p[1]= Math.max(p[1],i[1]);
        else{
            res.push(p);
            p=i;
        }
    }
    res.push(p);
    return res;
};