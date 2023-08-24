const numbers = [4, 5, 2, 8, 10];

const players = [65,67,75,55,59,66]

const selected = players.filter(p=>p%2==0)

console.log(selected);


const names = ["Alim", "Shajon", "Nadim", "Apu"];




const friends = names.filter(x=>x.length%2===0)


// let evenFriends = []

// const friends = (arr)=>{
//     for(let name of arr){
//         if(name.length%2===0){
//             evenFriends.push(name, name.length)
//         }
//     }
//     return evenFriends
// }

console.log(friends);