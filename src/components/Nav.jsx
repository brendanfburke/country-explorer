import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Nav = (props) => {

    const [search, setSearch] = useState(null)


    return (
        <div className="nav">
            <Link to='/' >
                <h2>Home</h2>
            </Link>
            <Link to='/countries' >
                    <h2>See All Countries</h2>
            </Link>
            <Link to='/continents' >
                <h2>See All Continents</h2>
            </Link>
            <Link to='/flags' >
                <h2>See All Flags</h2>
            </Link>
            <div className="search-box">
                <input className="search-input" placeholder="Search here..." type="text" onChange={e => {
                    setSearch(e.target.value)
                }} />
                <Link to={`/search/${search}`} >
                    <button className="search-button">Search</button>
                </Link>
            </div>
        </div>
    )
}

export default Nav