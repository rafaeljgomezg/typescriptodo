

//defining union types with the "|"(pipe) sign
function totalLength(x: (string | any[]), y: (string | any[])): number {
    var total: number = x.length + y.length;
    
    x.slice(0)
    
    if(x instanceof Array) { //typeGuard sintax
        x.push('TypeScript')
    }
    
    if(x instanceof String) {
        x.substr(0)
    }
    
    return total;
}
