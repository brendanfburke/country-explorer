import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const Home = (props) => {

    const [countries, setCountries] = useState(null)

    const url = 'https://restcountries.com/v3.1/all'

    const getCountries = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setCountries(data)
    }

    useEffect(() => {
        getCountries()
    }, [])



    const loaded = () => {
        return (
            <div className="home-container">
                <h1>Home</h1>
                <Link to='/countries' >
                    <h2>See All Countries</h2>
                </Link>
                <Link to='/continents' >
                    <h2>See All Continents</h2>
                </Link>
                <Link to='/subregions' >
                    <h2>See All Subregions</h2>
                </Link>
                <Link to='/flags' >
                    <h2>See All Flags</h2>
                </Link>
            </div>
        )
    }

    const loading = () => {
        return (
            <img className="loading" src="https://c.tenor.com/hlKEXPvlX48AAAAi/loading-loader.gif" alt='loading gif' />
        )
    }

    return countries ? loaded() : loading()

}

export default Home