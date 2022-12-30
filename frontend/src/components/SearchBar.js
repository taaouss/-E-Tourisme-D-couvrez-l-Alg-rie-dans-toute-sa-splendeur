
import React from "react"
import "./SearchBar.css"
const SearchBar = ({ posts, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()
    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(posts)
        const resultsArray = posts.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value))
        setSearchResults(resultsArray)
    }

    return (
        <div className="searchBar">
            <form className="search" onSubmit={handleSubmit}>
                <input
                    className="search__input"
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                />
                <button className="search__button">
                    search
                </button>
            </form>
        </div>
    )
}
export default SearchBar