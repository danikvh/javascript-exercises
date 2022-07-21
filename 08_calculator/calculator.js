const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	const res = array.reduce((total, num) => {
    return total += num;
  }, 0);

  return res;
};

const multiply = function(array) {
  return array.reduce((total,num) => {
    return total = total * num;
  }, 1);
};

const power = function(base, mult) {
	let res = base;
  for (let i = 1; i < mult; i++) {
    res = base * res;
  }
  return res;
};

const factorial = function(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res = res * i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
