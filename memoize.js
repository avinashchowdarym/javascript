function sum(a,b,c){
    return a+b+c;
}

function memoize(fn) {
    // write your solution here
    let cache = {};
    return (...args)=> {
      const key = JSON.stringify(args);
      if(key in cache){
        return cache[key];
      }
      else{
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
      }
    }
}
console.log(memoize(sum)(1,2,3));