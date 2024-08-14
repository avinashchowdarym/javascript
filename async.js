const fs = require('fs');

console.log('first line');

// let data = fs.readFileSync('/Users/avinash/javascript/fs1.txt');

// console.log('file data =>' + data);

// above code is sync 

//async 

fs.readFile('/Users/avinash/javascript/fs1.txt',cb1);

function cb1(err,data){
    if(err) console.log('error!');
    console.log('this is file 1' + data);
}


console.log('last line');
