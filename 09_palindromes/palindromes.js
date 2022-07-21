const palindromes = function (word) {
    const regex = /[^A-Za-z0–9]/g;
    let cleanWord = word.toLowerCase().replace(regex, "");
    let reverseWord = cleanWord.split("").reverse().join("");
    return cleanWord === reverseWord;
};

// Do not edit below this line
module.exports = palindromes;
