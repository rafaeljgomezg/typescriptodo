//Classic way to define a function with some values

function add(){
    var values = Array.prototype.splice.call(arguments,[1]),
    total=0;
    for (var value of values){
        total  += value;   
    }
    return total;
}


//ES6 way

function add1 (...values){
 var total=0;
    for (var value of values){
        total  += value;   
    }
    return total;
}


//Doing some calculation

function calculate (...values){
 var total=0;
    for (var value of values){
        total  += value;
    }
    return total;
}

console.log(calculate(1,2,3,4,5,6));


//Doing calcalation with some options

function calculate1 (action,...values){
 var total=0;
    for (var value of values){
        switch (action){
            case 'add' :
                total  += value;
                break;
            case 'substract':
                total  -= value;
                break;
        }
    }
    return total;
}

console.log(calculate1('add', 1,2,3,4,5,6));

//Inserting an array inside another array
var source = [3,4,5];
var dest = [1,2,...source,6,7,8];
console.log(dest);

//another example to concatenate two arrays (ES5 sintax)
var list = [1,2,3];
var toAdd = [4,5,6];
Array.prototype.push.apply(list,toAdd);
console.log(list);

//Concatenate ES6 sintax
var list = [1,2,3];
var toAdd = [4,5,6];
list.push(...toAdd);
console.log(list);