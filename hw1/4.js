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