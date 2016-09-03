//Classic way to define a function with some values
function add() {
    var values = Array.prototype.splice.call(arguments, [1]), total = 0;
    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
        var value = values_1[_i];
        total += value;
    }
    return total;
}
//ES6 way
function add1() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i - 0] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, values_2 = values; _a < values_2.length; _a++) {
        var value = values_2[_a];
        total += value;
    }
    return total;
}
//Doing some calculation
function calculate() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i - 0] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, values_3 = values; _a < values_3.length; _a++) {
        var value = values_3[_a];
        total += value;
    }
    return total;
}
console.log(calculate(1, 2, 3, 4, 5, 6));
//Doing calcalation with some options
function calculate1(action) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, values_4 = values; _a < values_4.length; _a++) {
        var value = values_4[_a];
        switch (action) {
            case 'add':
                total += value;
                break;
            case 'substract':
                total -= value;
                break;
        }
    }
    return total;
}
console.log(calculate1('add', 1, 2, 3, 4, 5, 6));
//Inserting an array inside another array
var source = [3, 4, 5];
var dest = [1, 2].concat(source, [6, 7, 8]);
console.log(dest);
//another example to concatenate two arrays (ES5 sintax)
var list = [1, 2, 3];
var toAdd = [4, 5, 6];
Array.prototype.push.apply(list, toAdd);
console.log(list);
//Concatenate ES6 sintax
var list = [1, 2, 3];
var toAdd = [4, 5, 6];
list.push.apply(list, toAdd);
console.log(list);
