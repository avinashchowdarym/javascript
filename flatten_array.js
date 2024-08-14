// const myArray = [1,2,[3,4],[[4,5,6],[8,9,0]]];

// function flattenArray(myArray){
//     const flat = [];
//     const handleFlat = (array)=>{
//         let counter =0;
//         while(counter < array.length){
//             if(Array.isArray(array[counter])){ // Array.isArray(myArray) returns boolean of weather value is array or not
//                 handleFlat(array[counter])
//             }
//             else{
//                 flat.push(array[counter])
//             }
//             counter++;
//         }

//     }
//     handleFlat(myArray);
//     return flat;
// }
// console.log(flattenArray(myArray));












































const myArray = [8,3,2,[23,3,23,2,33],[232,2,[232,2,43,5,5]]];



function flatArray(myArray){
    const flat = [];
    const flattened = (array) => {
        let counter =0;
        while(counter < array.length){
            const val = array[counter];
            if(Array.isArray(val)){
                flattened(val);
            }
            else{
                flat.push(val);
            }
            counter++;
        }
    }
    flattened(myArray);
    return flat;
}
console.log(flatArray(myArray));