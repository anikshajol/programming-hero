// task -1: console log the secondary school location of Sophia 
let data11 = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        { school_name: "ABC secondary school" },
                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}

// const a = data.Sophia.study[1].secondary[1].location
// console.log(a);


// const {Sophia}=data

// const {study}= Sophia

// const school = study[1]



// const location = school



// console.log(location.secondary[1].location);




// for(const location of Sophia.study){
//    for(const obj in location){
//     const value = location[obj]
    
//    }
// }



// task-2: console .log  output: Petersburg, Herry

let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
}


// const name = students['2222'].address.city



// console.log(name);




// task-3 : access and then show habluder adda
// show output Beginner
let data2 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}


const {data} = data2

// console.log(data);

const hablu = data[0].bookDetails.name

console.log(hablu);

const Beginner = data[1].bookCategory

console.log(Beginner);



