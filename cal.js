let add = function(x, y) {
    return x + y;
};

let subt = function(x, y) {
    return x - y;
};

let div = function(x, y) {
    if (y == 0) {
        console.log("Division Undefined.");
        return undefined;
    } else {
        return x / y;
    }
};

let multi = function(x, y) {
    return x * y;
};

module.exports = { add, subt, div, multi };
