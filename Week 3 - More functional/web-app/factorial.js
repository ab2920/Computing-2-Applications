

function factorial(n) { 
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n-1);
    };
};
console.log(factorial(5));

function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    };
};

function lucas(n) {
    if (n === 0) {
        return 2;
    } else if (n === 1) {
        return 1;
    } else {
        return lucas(n-1) + lucas(n-2);
    };
};

debugger;