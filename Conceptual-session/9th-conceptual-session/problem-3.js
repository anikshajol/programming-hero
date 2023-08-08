
function mindGame(num) {
    if(num<=0 || typeof num !== 'number'){
        return 'Please provide valid data'
    }
    else{
      const result = (((num*3)+10)/2)-5
      return result
    }
    
}

console.log(mindGame(5));