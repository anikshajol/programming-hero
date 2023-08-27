function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>displayUser(data))
    
}


function displayUser(data){
    const usersContainer = document.getElementById('users-container')
    for(const user of data){
     

        const li = document.createElement('li')

        li.innerText= user.name

        usersContainer.appendChild(li)

    }
}