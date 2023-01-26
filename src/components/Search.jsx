import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router";


const Search = () => {

    const [search, setSearch] = useState(null)
    const navigate = useNavigate()

    const keyDown = (e) => {
        if (e.keyCode === 13) {
            navigate(`/search/${search}`)
        }
    }

    return (
        <div onKeyDown={keyDown} className="search-box">
                    {/* <div className="search-title" >Find a country</div> */}
                        <input className="search-input" placeholder="Search here..." type="text" onChange={e => {
                            setSearch(e.target.value)
                        }}  />
                        <Link  to={`/search/${search}`} >
                            <button    className="search-button">Search</button>
                        </Link>
                    </div>
    )
}

export default Search