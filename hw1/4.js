/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var ini = init;
    return {
        increment: () => {
            return ++ini;
        },
        reset: () => {
            ini = init;
            return init;
        },
        decrement: (val2) => {
            return --ini;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */