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


function totalLength(x, y) {
    var total = x.length + y.lengt;
    return total;
}