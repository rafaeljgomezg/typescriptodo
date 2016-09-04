var animal = { 
    name: "Fido",
    species: "Dog",
    age: calculateAge(2010),  //typescript function object may be call it from other objects
    speak: function() { 
        console.log('Woof!'); 
    }
}


function calculateAge(birthYear){  // typescript determine automatically type of object, in ths case is a number
    return Date.now() - birthYear;
}


function totalLength(x, y: string) {  
    var total:number = x.length + y.length;
    return total;
}

function totalLength1(x: any[], y: string) {  // even we can define "x" as an array object type
    var total:number = x.length + y.length;
    return total;
}   