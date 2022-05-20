
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const CountryShow = (props) => {
    const [countries, setCountries] = useState(null)
    // eslint-disable-next-line max-len

    const params = useParams()

    const url = 'https://restcountries.com/v3.1/name/'
    

   const  KEY = process.env.REACT_APP_EMBED_API_KEY
    
    useEffect(() => {
        const getCountries = async () => {
            const response = await fetch(`${url}${params.id}?fullText=true`)
            const data = await response.json()
            setCountries(data)
        };
        getCountries();
                
        
        
        
    }, [params.id, url] )
    
    
    
    
    const loaded = () => {
        
        const country = countries[0]

        let lat 
        let lng 
        
    
     

        let capital
        
       if (!country.capital) {
           capital = <p>{country.name.common} has no capital</p>;
           
        } else {
            capital = <p>The capital of {country.name.common} is <strong>{country.capital}</strong>  </p>
            lat = country.capitalInfo.latlng[0]
            lng = country.capitalInfo.latlng[1]
            
        }
        
        
        if (country.name.common === 'Antarctica') {
            lat = -66;
            lng = 88
            
        }


       
            
            
        
        

        return (
            <div className="country">
                <h2>{country.name.common}</h2>
                <h3>Official Name: {country.name.official}</h3>
                <img className="show-page-flag" src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
                <p>In {country.name.common} they drive on the {country.car.side} side of the road</p>
                <p>The population of {country.name.common} is <strong>{country.population}</strong>  </p>
                {capital}
                <iframe
                    style={
                        
                        {width:"40vh",
                        height:"40vh",
                        style:"border:0",
                        alignSelf: 'center',
                        marginBottom: '10vh'
                    }
                    }
                    title="Country Map"
                    loading="lazy"
                    allowFullScreen
                    referrerpolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${KEY}&zoom=10
                        &q=${lat},${lng}`}>
                </iframe>
                
                
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