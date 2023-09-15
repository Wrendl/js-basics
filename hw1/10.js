/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    var cnt = 0;
    return function(...args){
        if (cnt == 0) {
            var x = fn(...args);
            cnt++;
            return x;
        }
    }
};

// [1,2,3] = 1,2,3

// fn( 1,2,3 )
// ...[1,2,3]

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */