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
                            <img className="flags" src={country.flags.svg} alt="" />
                        </Link>
                    )
                })}
            </div>
        )
    }

    const loading = () => {
        return (
            <h1>Loading....</h1>
        )
    }

    return countries ? loaded() : loading()
}

export default FlagIndex