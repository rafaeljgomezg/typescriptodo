var array = [
    "Pick up drycleaning",
    "Clean Batcave",
    "Save Gotham",
    "test4"
];
//   ++++   Classic Way  ++++
console.log('CLASSIC WAY');
for (var index in array) {
    var value = array[index];
    console.log(value);
}
//   ++++   ES6 Way   ++++
console.log('ES6 Way');
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var value_1 = array_1[_i];
    console.log(value_1);
}
