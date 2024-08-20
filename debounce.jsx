
const useDebounce = ({func,delay}) => {

  var timeout = null;
  return function (...args){
    let context = this;
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
        timeout = null;
        func.apply(context,args);
    },delay)

  }
}

useDebounce();