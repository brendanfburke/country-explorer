import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = (props) => {

    const [search, setSearch] = useState(null)



    return (
        <div className="nav">
            <Link to='/' >
                <h2>Home</h2>
            </Link>
            <h2>|</h2>
            <Link to='/countries' >
                    <h2>See All Countries</h2>
            </Link>
            <h2>|</h2>
            <Link to='/continents' >
                <h2>See All Continents</h2>
            </Link>
            <h2>|</h2>
            <Link to='/flags' >
                <h2>See All Flags</h2>
            </Link>
            <div className="search-box">
                <div className="search-title" >Find a country</div>
                <input className="search-input" placeholder="Search here..." type="text" onChange={e => {
                    setSearch(e.target.value)
                }} />
                <Link to={`/search/${search}`} >
                    <button   className="search-button">Search</button>
                </Link>
            </div>
        </div>
    )
}

export default Nav