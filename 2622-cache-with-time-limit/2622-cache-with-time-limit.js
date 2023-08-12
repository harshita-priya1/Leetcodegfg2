
var TimeLimitedCache = function() {
    this.cache = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    if(this.cache[key]){
        this.cache[key].value = value;
        clearTimeout(this.cache[key].timer);
        this.cache[key].timer = setTimeout(()=>{
            delete this.cache[key];
        }, duration);
        return true;
    }
    else {
        this.cache[key] = {
            value: value,
            timer: setTimeout(() => {delete this.cache[key];}, duration)
        }
        return false;
    }
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(this.cache[key]){
        return this.cache[key].value;
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    let cnt=0;
    for(let key in this.cache){
        cnt++;
    }
    return cnt;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */