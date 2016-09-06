//Function definition
function TodoService() {
    this.todos = [];
}
//Create a method called getAll that belongs to Function TodoService
TodoService.prototype.getAll = function() {
    return this.todos;
}
//Create an object that points to function TodoService and its proptotype objects, 
//then access to the method getAll inside TodoService.prototype
var service = new TodoService();
service.getAll()