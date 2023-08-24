
class Vehicale{
    constructor(name,price){
        this.name = name;
        this.price = price
    }

    move(){
        console.log('gari chole na');
    }
}



const ena = new Vehicale('Ena', 1250000)

console.log(ena);


class Bus extends Vehicale{
    constructor(name,price,seat,ticketPrice){
        super(name,price)
        this.seat=seat;
        this.ticketPrice= ticketPrice
    }
}


const sonya = new Bus('Sonya',2500000,40,400)

console.log(sonya);


class truck extends Vehicale{
    constructor(name,price,load){
        super(name,price)
        this.load=load
    }
}

function min(nums) { return Math.min(nums) }
console.log(min( [1,3,2 ]));

const cube=x=> x*x*x; 
console.log(cube(2))


const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);


const {x, y, z} = {x: 1, y1: 2, z: 3};

console.log(y);

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);

const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}

const {price}=product
console.log(price);