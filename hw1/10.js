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