
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const CountryShow = (props) => {
    const [countries, setCountries] = useState(null)
    // eslint-disable-next-line max-len

    const params = useParams()

    const url = 'https://restcountries.com/v3.1/name/'
    

    const isMapLoaded = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })
    
    useEffect(() => {
        const getCountries = async () => {
            const response = await fetch(`${url}${params.id}?fullText=true`)
            const data = await response.json()
            setCountries(data)
        };
        getCountries();
                
        
        
        
    }, [params.id, url, isMapLoaded] )
    
    
    
    
    const loaded = () => {
        let center
        let zoom

        
        
    
        const country = countries[0]
     

        let capital
        
       if (!country.capital) {
           capital = <p>{country.name.common} has no capital</p>
           center = { lat: countries[0].latlng[0], lng: countries[0].latlng[1] }
           zoom = 8
       } else {
           capital = <p>The capital of {country.name.common} is <strong>{country.capital}</strong>  </p>
           center = { lat: countries[0].capitalInfo.latlng[0], lng: countries[0].capitalInfo.latlng[1] }
           zoom = 8
       }

       if (country.name.common === 'Antarctica') {
           center = { lat: -66, lng: 89 }
           zoom = 1
       }

       let mapLoader

       if (!isMapLoaded) {
        mapLoader = <p>Loading your map</p>
       } else {
           mapLoader = <GoogleMap zoom={zoom} center={center} mapContainerClassName="map-container">
           <Marker position={center} />
       </GoogleMap>
       }
            
            
        
        

        return (
            <div className="country">
                <h2>{country.name.common}</h2>
                <h3>Official Name: {country.name.official}</h3>
                <img className="show-page-flag" src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
                <p>In {country.name.common} they drive on the {country.car.side} side of the road</p>
                <p>The population of {country.name.common} is <strong>{country.population}</strong>  </p>
                {capital}
                {mapLoader}
                
                
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