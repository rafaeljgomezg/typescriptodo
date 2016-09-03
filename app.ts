var container = document.getElementById('container');
var prueba = document.getElementById('prueba');
var test = true; // it is evaluated directly in the prueba.innerHTML expression

var todo = {
    id: 123,
    name: 'Pick up drycleaning',
    completed: true // it is evaluated directly in the container.innerHTML expression
};

container.innerHTML = `
<div todo='${todo.name}' class="list-group-item}">
    <i class="${todo.completed ? "" : "hidden"} text-success glyphicon glyphicon-ok"></i>
    <span class="name">${todo.name}</span>
</div>
`

prueba.innerHTML = ` 
 He named his car <i class ='${test ? "" : "hidden"} text-success '>The lightning</i>, because it was very fast.
`