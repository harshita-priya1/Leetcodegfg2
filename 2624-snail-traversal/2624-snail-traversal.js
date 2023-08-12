/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(r, c) {
    if(this.length!== r*c) return [];
    const ans = Array(r).fill([]).map(()=>[]);
    for(let i=0;i<this.length;i++){
        let rn = i%r;
        let cn = Math.floor(i/r);
        if(cn%2===0){
            ans[rn][cn] = this[i];
        }
        else{
            ans[r-1-rn][cn] = this[i];
        }
    }
    return ans;
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */