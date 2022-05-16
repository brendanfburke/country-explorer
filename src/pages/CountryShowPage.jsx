import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

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
                <img className="show-page-flag" src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
                <p>In {country.name.common} they drive on the {country.car.side} side of the road</p>
                <p>The capital of {country.name.common} is {country.capital[0]}</p>
                <a href={country.maps.googleMaps}>View on Google Maps</a>
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