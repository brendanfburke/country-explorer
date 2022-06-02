import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


const Search = () => {

    const [search, setSearch] = useState(null)
    
    return (
        <div className="search-box">
                    {/* <div className="search-title" >Find a country</div> */}
                        <input className="search-input" placeholder="Search here..." type="text" onChange={e => {
                            setSearch(e.target.value)
                        }}  />
                        <Link  to={`/search/${search}`} >
                            <button   className="search-button">Search</button>
                        </Link>
                    </div>
    )
}

export default Search