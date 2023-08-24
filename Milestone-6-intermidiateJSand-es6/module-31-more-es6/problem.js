const oddArray = [1,3,5,7,9]


const evenArray =[]
for(const numbers of oddArray){
   
   const sum= numbers+1

    evenArray.push(sum)
}

// console.log(evenArray);


const even = oddArray.map(p=>p+1)

// console.log('map',even);




const arr = [33,50,79,78,90,101,30]


const num = arr.filter(n=>n%10===0)

console.log(num);

const find = arr.find(n=>n%10===0)

console.log(find);


const instructor = [
    {name:'nodi',age:20,position:'senior'},
    {name:'akil',age:15,position:'junior'},
    {name:'sabuj',age:22,position:'senior'},
]

const senior = instructor.filter(p=>p.position==='senior')

// console.log(senior);


const sum = instructor.reduce((accum,n)=>accum+n.age,0)

console.log(sum);