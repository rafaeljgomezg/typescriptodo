var array = [
    "Pick up drycleaning", 
    "Clean Batcave", 
    "Save Gotham",
    "test4"
];


//   ++++   Classic Way  ++++
console.log ('CLASSIC WAY');
for (var index in array) {
    var value = array[index];
    console.log(value);
}


//   ++++   ES6 Way   ++++
console.log ('ES6 Way');
for (let value of array) { //improved way
    console.log(value);  
}