/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timer;
    return function(...args) {
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn(...args);
        },t);
        
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
/*
    complete function after delay of t
    if during t time it is called again, reset timer and again wait for t time
*/

// const fun = debounce((a)=>{ console.log(a);},50);
// fun("Hello");