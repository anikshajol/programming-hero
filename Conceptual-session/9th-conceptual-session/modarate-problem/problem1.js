function findingBadData(arr) {

    if(!Array.isArray(arr)){
        return 'Please provide an array'
    }

    // let badData = [];
let badData = 0
    for(let i = 0; i<arr.length; i++){
        let element  = arr[i]
        if(element<0){
            // badData.push(element)
            badData++
        }
        
    
    }

    // return badData.length
    return badData
}


const array = [1,2,5]
const array2 = [2,-5,-7,-13]

console.log(findingBadData(array2));