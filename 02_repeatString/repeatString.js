const repeatString = function(word, number) {
let res = "";
if (number < 0) { return "ERROR"; }
  for (let i = 0; i < number; i++) {
    res += word;
  }
  return res;
};

// Do not edit below this line
module.exports = repeatString;
