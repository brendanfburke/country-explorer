import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const CountryShow = (props) => {
    const [countries, setCountries] = useState(null)

    const params = useParams()

    const url = 'https://restcountries.com/v3.1/name/'

    const getCountries = async () => {
        const response = await fetch(`${url}${params.id}`)
        const data = await response.json()
        setCountries(data)
        console.log(data)
    }

    useEffect(() => {
        getCountries()
    }, [])



    const loaded = () => {
        const country = countries[0]
        return (
            <div className="country">
                <h2>{country.name.common}</h2>
                <h3>Official Name: {country.name.official}</h3>
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

export default CountryShow