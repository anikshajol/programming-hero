function isInteger(num) {
    
 if(typeof num!== 'number'){
    return 'Please provide a number'
 }
 else{
    if(num%1===0){
        return true
       }
       else{
        return false
       }
 }

// if(Number.isInteger(num)){
//     return true;
// }
// return false

}

console.log(isInteger(5.5));

