const sumAll = function(limit1, limit2) {
    let res = 0;
    if (limit1 < 0 || limit2 < 0 || typeof(limit1) !== "number" || 
        typeof(limit2) !== "number") { 
            return "ERROR"; 
    }
    if (limit1 < limit2) {
        for (let i = limit1; i <= limit2; i++) {
            res += i;
        }
    } else { //limit2 < limit1
        for (let i = limit2; i <= limit1; i++) {
            res += i;
        }
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
