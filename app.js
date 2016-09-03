// Destructuring Arrays
var array = [123, "Pick up a dry cleaning", false];
var id = array[0], action = array[1], state = array[2];
//Destructuring Objects
var a = 5;
var b = 6;
console.log(a, b);
_a = [b, a], a = _a[0], b = _a[1];
console.log(a, b);
var todo = {
    id: 123,
    title: "Pick up a cleaning",
    completed: false
};
var any = todo.id, title = todo.title, completed = todo.completed;
var completed = todo.completed, any = todo.id, title = todo.title;
function countdown1(initial, final, interval) {
    if (final === void 0) { final = 0; }
    if (interval === void 0) { interval = 5; }
    var current = initial;
    while (current > final) {
        console.log(current);
        current -= interval;
    }
}
countdown1(45, 0, 15);
function countdown(_a) {
    var initial = _a.initial, _b = _a.final, final = _b === void 0 ? 0 : _b, _c = _a.interval, interval = _c === void 0 ? 1 : _c, current = _a.initial;
    while (current > final) {
        console.log(current);
        current -= interval;
    }
}
countdown({ initial: 45, interval: 15 });
var _a;
