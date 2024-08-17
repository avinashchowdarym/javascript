var debounce = function(fn, t) {
    
    var timeout =null;
    return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(()=>{
                fn(...args)
            },t)
    }
  };