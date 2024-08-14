// shallow copy and deep copy 


function MakeDeepCopy (obj){
    if(typeof(obj)!=='object' || obj === null){
        return obj;
    }
    var copied = Array.isArray(obj) ? [] : {};
    var keys = Object.keys(obj);

    for(var i=0;i<keys.length;i++){
        copied[keys[i]] = MakeDeepCopy(obj[keys[i]]);
    }
    return copied;
}

var objec = {
    name: 'avinash',
    age: '25',
    desi: {
        name: 'mandalapu',
        sex: 'male'
    }
}
var copied = MakeDeepCopy(objec);
console.log(copied);

// shallow copy 

var copied2 = copied; // whenever any value of copied2 is changed copied1 will be changed too
 
var copied4 = Object.assign(copied); // nested objects wont work
var copied5 = {...copied} // nested object works but functions wont work
var copied3 = JSON.parse(JSON.stringify(copied)); // values like date() functions are changes to string formats 


