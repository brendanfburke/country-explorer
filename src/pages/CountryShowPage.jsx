
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
// import Maps from "../components/Maps";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

const CountryShow = (props) => {
    const [countries, setCountries] = useState(null)

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
    
    
    
    
    
    const isLoaded = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })
    const loaded = () => {
        const center = { lat: countries[0].capitalInfo.latlng[0], lng: countries[0].capitalInfo.latlng[1] }
        
    
        
        
        
            
            
        
        
        const country = countries[0]

        return (
            <div className="country">
                <h2>{country.name.common}</h2>
                <h3>Official Name: {country.name.official}</h3>
                <img className="show-page-flag" src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
                <p>In {country.name.common} they drive on the {country.car.side} side of the road</p>
                {/* TODO: update the following line to have a conditional that doesn't render if the capital is blank */}
                <p>The capital of {country.name.common} is {country.capital}</p>
                <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
                    <Marker position={center} />
                </GoogleMap>
                
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