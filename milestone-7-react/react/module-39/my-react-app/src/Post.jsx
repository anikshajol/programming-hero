import './Post.css'

export default function Post({post}){
    console.log(post);
    return(
        <div className='box'>
            <h2>Titel: {post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}