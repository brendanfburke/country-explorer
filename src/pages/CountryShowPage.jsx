import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const CountryShow = (props) => {
    const [countries, setCountries] = useState(null)
    const [currencies, setCurrencies] = useState(null)

    const params = useParams()

    const url = 'https://restcountries.com/v3.1/name/'
    
    
    
    
    useEffect(() => {
        const getCountries = async () => {
            const response = await fetch(`${url}${params.id}`)
            const data = await response.json()
            setCountries(data)
        };
        getCountries();
        
        
        
        
    }, [params.id, url] )
    
    // useEffect(() => {
    //     const getCurrencies = async () => {
    //         await console.log(Object.keys(countries[0].currencies)[0])
    
    //         const currencyUrl = await `https://free.currconv.com/api/v7/convert?q=${Object.keys(countries[0].currencies)[0]}_USD&compact=ultra&apiKey=78eea202d5d3a692fff2`
    //         const response = await fetch(currencyUrl)
    //         const data = await response.json
    //         setCurrencies(data)
    //         console.log(data)
            
    //     }
    //     getCurrencies();

    // }, [])
    
    
    const loaded = () => {
        console.log(currencies)
        
        
        const country = countries[0]

        return (
            <div className="country">
                <h2>{country.name.common}</h2>
                <h3>Official Name: {country.name.official}</h3>
                <img className="show-page-flag" src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
                <p>In {country.name.common} they drive on the {country.car.side} side of the road</p>
                {/* TODO: update the following line to have a conditional that doesn't render if the capital is blank */}
                <p>The capital of {country.name.common} is {country.capital}</p>
                <a href={country.maps.googleMaps} target='_blank' rel="noreferrer">View on Google Maps</a>
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