
function isLGSeven(number) {
    if(typeof number !== 'number'){
        return 'Pleae provide a valid number'
    }
    else{
        let result = number -7
        if(result<7){
            return result;
        }
        else{
            return number *2
        }
    }
}

console.log(isLGSeven(15));