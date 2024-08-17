function sum(a,b,c){
    return a+b+c;
}

function memoize(fn){
    var result = {};
    return function(...args){
        const key = JSON.stringify(args);
       if(result[key]) return result[key];
       else{
        result[key] = fn(...args);
        return result[key];
       }
    }

}
console.log(memoize(sum)(1,2,3));