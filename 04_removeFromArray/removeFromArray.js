const removeFromArray = function(array) {
    let args = Array.from(arguments);
    args.splice(0, 1);
    args.sort(function(a,b) { return a - b;});
    
    for (let i = args.length - 1; i >= 0; i--) { //Numbers
        if (typeof args[i] === "number" && args[i] <= array.length) {
            array.splice(args[i] - 1, 1);
        } else { //A string
            for (let j = 0; j < array.length; j++) {
                if (args[i] === array[j]) {
                    array.splice(args[j], 1);
                }
            }
        }
    }
    return array;
};


const removeFromArrayV2 = function(...args) {   
    const array = args[0];
    const newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
