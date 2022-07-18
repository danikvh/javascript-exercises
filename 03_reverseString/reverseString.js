const reverseString = function(word) {
    res = "";
    for (let i = word.length; i > 0; i--) {
        res += word.slice(i - 1, i);
    }
    return res;
};


const reverseStringV2 = function(word) {
    return word.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
