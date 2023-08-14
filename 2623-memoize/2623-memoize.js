/**
 * @param {Function} fn
 */
function memoize(fn) {
    const cache = new Map();

return function(...args) {
    let key = JSON.stringify(args);
    if(cache.has(key)){
        return cache.get(key);
    }
    else{
        let ans = fn(...args);
        cache.set(key , ans);
        return ans;
    }
}

}

const memoizedSum = memoize(function(a, b) {
  return a + b;
});

const mFib = memoize(function(n) {
    if(n<=1)
    return 1;
    return mFib(n-1) +mFib(n-2);
});

const mFact = memoize(function(n) {
  if(n<=1) return 1;
    return n*mFact(n-1);
});


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */