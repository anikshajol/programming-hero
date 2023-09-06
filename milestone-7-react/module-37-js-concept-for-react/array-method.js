const products = [
    {
        name:'laptop', price:32000, brand:'lenovo'
    },
    {
        name:'phone', price:132000, brand:'apple'
    },
    {
        name:'watch', price:3000, brand:'casio'
    },
    {
        name:'camera', price:21000, brand:'sony'
    },
]


// map

const brands = products.map(name=>name.brand)
const price = products.map(name=>name.price)

// console.log(brands);
// console.log(price);


// products.forEach(product=>console.log(product.brand))


const cheap = products.filter(product=>product.price>100000)

// console.log(cheap);

const n = products.find(product=>product.name.includes("n"))

console.log(n);