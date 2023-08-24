const products = [
    {id:2,name:'Mac',price:150000},
    {id:1,name:'lenovo',price:50000},
    {id:3,name:'samsung',price:30000},
    {id:4,name:'asus',price:40000}
]


const names = products.map((product=>product.name))
const prices = products.map(p=>p.price)

// console.log(names,...prices);
// console.log(prices);

// for each

// products.forEach(p=>console.log(p.id))


// filter

const expensive = products.filter(p=>p.price>=50000)

// console.log(expensive);

const affordable = products.find(p=>p.price<50000)

// console.log(affordable);


const total = products.reduce((p,c)=>p+c.price,0)

// console.log(total);


let sum = 0

for(const product of products){

    console.log(sum+=product.price);
}

console.log(`sum of price: ${parseFloat( sum)}`);