
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

        let un 

        if (country.unMember === false) {
            un = <p>{country.name.common} is not a member of the United Nations</p>
        } else {
            un = <p>{country.name.common} is a member of the United Nations</p>
        }

        let subRegion 

        if (country.subregion) {
            subRegion = <p>{country.name.common} is located in {country.subregion}</p>
        } else {
            subRegion = null
        }

        const Lang = () => {
            let vals = Object.values(country.languages)
            if (vals.length === 1) {
                return (
                    <div>
                        <p>{country.name.common} has {vals.length} official language:</p>
                        <ul>
                            {vals.map((language, key) => {
                                return (
                                    <li key={key}>{language}</li>
                                )
                            })}

                        </ul>
                    </div>

                )
            } else {
                return (
                    <div>
                        <p>{country.name.common} has {vals.length} official languages:</p>
                        <ul>
                            {vals.map((language, key) => {
                                return (
                                    <li key={key}>{language}</li>
                                )
                            })}

                        </ul>
                    </div>

                )
            }

        }
            
        
        

        return (
            <div className="country">





                <div className="showpage-left">
                    <h2 className="showpage-title">{country.name.common}</h2>
                    <h3 className="showpage-subtitle">Official Name: {country.name.official}</h3>
                    <div className="showpage-info">
                        {subRegion}
                        <p>In {country.name.common} they drive on the {country.car.side} side of the road</p>
                        <p>The population of {country.name.common} is <strong>{country.population.toLocaleString()}</strong>  </p>
                        {capital}
                        {un}
                        <Lang />
                    </div>
                </div>
                <div className="showpage-right">
                    <img className="showpage-flag" src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
                    <iframe
                        style={
                            
                            {
                            style:"border:0",
                            borderRadius:"15px",
                            alignSelf: 'center',
                            marginBottom: '10vh'
                        }
                        }
                        className="map"
                        title="Country Map"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps/embed/v1/place?key=${KEY}&zoom=10
                            &q=${lat},${lng}`}>
                    </iframe>
                </div>
                
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

export default CountryShow