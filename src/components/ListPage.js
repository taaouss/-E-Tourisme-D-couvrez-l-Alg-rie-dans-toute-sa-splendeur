import Post from "./Post"
import "./Post.css"
const ListPage = ({ searchResults }) => {

    const results = searchResults.map(post => <Post key={post.id} post={post} />)

    const content = results?.length ? results : <article><p>No Matching Posts</p></article>

    return (
        <div className="List_Post">{content}</div>
    )
}
export default ListPage