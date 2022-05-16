import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CountryIndex = (props) => {
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
            countries.map((country, idx) => {
                console.log(country.name.common)
                return (
                    <Link to={`/${country.name.common}`} >
                        <h2>{country.name.common}</h2>
                    </Link>
                )
            })

        )
    }

    const loading = () => {
        return (
            <img className="loading" src="https://c.tenor.com/hlKEXPvlX48AAAAi/loading-loader.gif" alt='loading gif' />
        )
    }

    return countries ? loaded() : loading()
}

export default CountryIndex