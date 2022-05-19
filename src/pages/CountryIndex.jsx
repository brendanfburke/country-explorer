import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CountryIndex = (props) => {
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
            <div className="country-index">
                <div className="letter-category">A</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        if (country.name.common[0] === 'A') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">B</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'B') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">C</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'C') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">D</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'D') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">E</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'E') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">F</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'F') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">G</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'G') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">H</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'H') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">I</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'I') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">J</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'J') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">K</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'K') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">L</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'L') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">M</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'M') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">N</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'N') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">O</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'O') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">P</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'P') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">Q</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'Q') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">R</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'R') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">S</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'S') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">W</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'W') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">T</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'T') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">U</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'U') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                })}

                </div>
                <div className="letter-category">V</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'V') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                })}

                </div>
                <div className="letter-category">W</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'W') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                })}

                </div>
                <div className="letter-category">X</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'X') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                })}

                </div>
                <div className="letter-category">Y</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'Y') {
                            return (
                                
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                })}

                </div>
                <div className="letter-category">Z</div>
                <div className="first-letter-organizer">
                    {countries.map((country, idx) => {
                        
                        if (country.name.common[0] === 'Z') {
                            return (
                                <div className="continent-country">
                                    <Link key={idx} to={`/${country.name.common}`} >
                                        <p>{country.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
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