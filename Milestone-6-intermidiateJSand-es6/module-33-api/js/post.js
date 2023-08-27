function loadPost (){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>displayPost(data))
}


function displayPost (posts){
    const postsContainer = document.getElementById('posts-container')
for(const post of posts){

    const div = document.createElement('div')

    div.style.border = '1px solid red'
    div.classList.add('padding')
    div.classList.add('center')

    div.innerHTML=
    `
    <p> ${post.userId} </p>
    <h2>${post.title}</h2>
    <p>${post.body} </p>   
    `
  postsContainer.appendChild(div)

}
}

loadPost()