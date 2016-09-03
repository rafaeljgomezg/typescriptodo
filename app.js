var container = document.getElementById('container');
function Counter(el) {
    var _this = this;
    this.count = 0;
    el.innerHTML = this.count;
    // 
    el.addEventListener('click', 
    /* THIS WAY WE DEFINE A FUNCTION IN THE OLD WAY (wrong way)
    function(){
        this.count += 1; // In this case "THIS" referes to global not the defined in the function, so thi is a mistake
        el.innerHTML=this.count;
    });*/
    // tHE RIGHT WAY TO DO IT ES6
    function () {
        _this.count += 1;
        el.innerHTML = _this.count;
    });
}
new Counter(container);
// FIRST WAY TO SHOW ARROW FUNCTION
var filtered = [1, 2, 3].filter(function (x) {
    return x > 0;
});
// SECOND WAY TO SHOW ARROW FUNCTION
var filtered = [1, 2, 3].filter(function (x) {
    return x > 0;
});
// THIRD WAY TO SHOW ARROW FUNCTION
var filtered = [1, 2, 3].filter(function (x) { return x > 0; }); //just one line arrow function
