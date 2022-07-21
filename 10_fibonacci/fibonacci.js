const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    let an2 = 0, an1 = 1, an = 1;
    if (n === 0) return a0;
    if (n === 1) return a1;
    for (let i = 2; i <= n; i++) {
        an = an1 + an2;
        an2 = an1;
        an1 = an;
    }
    return an;
};

// Do not edit below this line
module.exports = fibonacci;
