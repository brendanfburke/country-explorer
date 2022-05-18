import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FlagIndex = (props) => {
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
        countries.sort((a, b) => a.name.common.localeCompare(b.name.common))
        return (
            <div className="flag-index">
                {countries.map((country, idx) => {
                    return (
                        <Link key={idx} to={`/${country.name.common}`} >
                            <div className="flag-index-flag">{country.flag}</ div>
                        </Link>
                    )
                })}
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

export default FlagIndex