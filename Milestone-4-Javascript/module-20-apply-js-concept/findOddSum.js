
// function getSumOfAnArray(numbers){

//     let sum =0;

//     for(let i = 0; i<numbers.length;i++){
//         const index = i
//      sum+=numbers[index]
 
    
       
//     }
//     return sum
// }


// function getOddNumbersOfAnArray(numbers) {
//     const oddNumbers=[]
//     for(let i=0;i<numbers.length;i++){
//         const element= numbers[i]
//         if(element%2==!0){

//             oddNumbers.push(element)
//             // console.log(i,element);
//         }
//     }
//     // console.log(oddNumbers);
//     return oddNumbers
// }


// // const myNumbers=[12,65,45,78,32,25,91]



// const oddNumbers = getOddNumbersOfAnArray(myNumbers)

// console.log(oddNumbers);
// console.log(getSumOfAnArray(oddNumbers)
// );





function getSumOfAnArray(numbers) {
    let sum = 0;
    for(let i = 0; i<numbers.length;i++){
        const element = numbers[i]
       sum+=element
    }
    return sum;
}


function getOddNumbersOfAnArray(numbers) {
    let oddNumbers =[]
    for(let i = 0; i<numbers.length;i++){

        const element = numbers[i]

        if(element%2==!0){
            oddNumbers.push(element)
        }
       
    }
    return oddNumbers
}


const myNumbers = [1,2,3,4,5,6,7,8,9]

const sumOfAnArray = getSumOfAnArray(myNumbers)

console.log(sumOfAnArray);

const oddNumber = getOddNumbersOfAnArray(myNumbers)

console.log(oddNumber);

const sumOfOddNumbers=getSumOfAnArray(oddNumber)
console.log( "Sum Of Odd numbers: " ,sumOfOddNumbers);

