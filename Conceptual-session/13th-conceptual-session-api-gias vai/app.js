const loadCategory = async () => {

    try {
        const response = await fetch(`https://openapi.programming-hero.com/api/news/categories`)
        const data = await response.json()


        // console.log(data.data.news_category)

     
        toggleLoading(false)
        showCategory(data)

    }

    catch (err) {
        console.log(err);
    }




}


// display

const showCategory = (data) => {
    
    let newsCategory = data.data.news_category;

    const tabContainer = document.getElementById('tab-container')
    

    newsCategory = newsCategory.slice(0, 3)

    newsCategory.forEach(category => {
        // console.log(category);

        // category data structuring
        const { category_id, category_name } = category

        const tab = document.createElement('a')

        const count = tabContainer.childElementCount

        tab.classList = 'tab text-2xl'
      
        tab.setAttribute('onclick', `handleClick('${category_id}')`)

        tab.innerHTML = ` ${count + 1}. ${category_name}`

        tabContainer.appendChild(tab)
        
    });
   
}


const handleClick = async (category_id) => {
    try {
        toggleLoading(true)
        const response = await fetch(` https://openapi.programming-hero.com/api/news/category/${category_id}`)
        const data = await response.json()

        // console.log(data.data)

        const categoryNews = data.data.slice(0, 5)

        const newsContainer = document.getElementById('news-container')
        newsContainer.innerHTML=''

        categoryNews?.forEach(news => {
            console.log(news);

            const div = document.createElement('div')
            div.classList = 'card w-96 bg-base-100 shadow-xl'

            div.innerHTML = ` 
            <figure><img src="${news?.image_url}" alt="Shoes" /></figure>
           <div class="flex justify-center items-center gap-5">
           <div class="avatar">
           <div class="w-12 mt-4 ml-2 rounded-full">
             <img src="${news?.author.img}" />
             
           </div>
           </div>
           <p> Author Name: ${news?.author.name}</p>
           </div>

            <div class="card-body">
              <h2 class="card-title">
                ${news?.title.slice(0,30)}
                <div class="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div> 
                <div class="badge badge-outline">Products</div>
              </div>
            </div>
            `

            newsContainer.appendChild(div)

        })


        toggleLoading(false)

    }

    catch (err) {
        console.log(err);
    }
}



const toggleLoading = (isLoading)=>{
    const loading = document.getElementById('loading')

    if(isLoading){
        loading.classList.remove('hidden')
    }
    else{
        loading.classList.add('hidden')
    }

}




loadCategory(handleClick('01'))