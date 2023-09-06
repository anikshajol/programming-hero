// fetch('url')
// .then()
// .then()

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

const newProduct =  {
    name:'sungluss', price:1000, brand:'raybon'
}

const newProducts = [...products,newProduct]

// console.log(newProducts);

// create a new array without one specific item
// create a new array without phone

const remaining = newProducts.filter(p=>p.name!== 'phone')

console.log(remaining);