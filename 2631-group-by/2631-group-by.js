/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    let obj={};
    this.forEach((e)=>{
        const key = fn(e);
        if(!obj[key]){
            obj[key]=[];
        }
        obj[key].push(e);
    });
    return obj;
    
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */