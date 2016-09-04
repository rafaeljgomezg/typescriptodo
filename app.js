function totalLength(x, y) {
    var total = x.length + y.length;
    x.slice(0);
    if (x instanceof Array) {
        x.push('TypeScript');
    }
    if (x instanceof String) {
        x.substr(0);
    }
    return total;
}
