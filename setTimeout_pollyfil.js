function setTimeoutPollyfill(callback,delay){
    if(typeof(callback) !== 'function') throw new Error('This is not a callback')
        if(typeof(delay) !== 'number' || delay<0) throw new error ('delay is wrong ')
    var startTime =  Date.now();

    function check(){
        if(startTime + delay > Date.now()){
        callback();
    }
    else{
        requestIdleCallback(check);
    }
}
    requestIdleCallback(check);   
}