document.getElementById('loadData2').addEventListener('click',function(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res=>res.json())
    .then(data=>console.log(data))
})


// document.getElementById('load-users').addEventListener('click',function(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res=>res.json())
//     .then(data=>{
//         for(let d of data){
//             console.log(d);
//         }
//     })
// })
document.getElementById('load-users').addEventListener('click',function(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>displayUser(data))
})

function displayUser(data){
    console.log(data);
}

// function loadUsers(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res=>res.json())
//     .then(data=>console.log(data))
// }