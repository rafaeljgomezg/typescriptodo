// Destructuring Arrays

var array = [123, "Pick up a dry cleaning", false];

var [id, action, state] = array;



//Destructuring Objects

let a=5;
let b=6;
console.log(a,b);

[a,b] = [b,a];
console.log(a,b);


var todo = {
    id: 123,
    title: "Pick up a cleaning",
    completed: false
}

var { id: any, title, completed } = todo;

var {completed , id:any, title} = todo;



function countdown1 (initial, final=0, interval = 5){
    var current = initial;
    while (current > final) {
        console.log(current);
        current -= interval;
    }
}

countdown1(45,0,15);

function countdown ({   
        initial, 
        final: final=0, 
        interval: interval = 1,
        initial: current
    })
    {
    while (current > final) {
        console.log(current);
        current -= interval;
    }
}

countdown({initial:45, interval:15});



