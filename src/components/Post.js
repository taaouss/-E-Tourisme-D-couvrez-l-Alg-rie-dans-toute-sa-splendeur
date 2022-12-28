import"./Post.css"
const Post = ({ post }) => {
    return (
       <div className="Post">
       <article>
            <h2 className="post_title">{post.title}</h2>
            <p className="post_body">{post.body}</p>
        </article>
        </div> 
    )
}
export default Post