import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CountriesBar from "../components/Countries";
import { useParams } from "react-router";


const CountryIndex = (props) => {
    const [countries, setCountries] = useState(null)

    const url = 'https://restcountries.com/v3.1/all'

    const params = useParams()

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
            <div className="country-index">
                <CountriesBar />
                <div className="countries-container">
                    {countries.map((country, key) => {
                        if (country.name.common[0] === params.id) {
                            return (
                                <div className="continent-country">
                               <Link to={`/${country.name.common}`} >
                                   <p>{country.name.common}</p>
                               </Link>
                           </div>
                            )
                        }
                    })}
                </div>

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

export default CountryIndex