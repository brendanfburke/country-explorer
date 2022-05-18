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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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
                                
                                <Link key={idx} to={`/${country.name.common}`} >
                                    <button>{country.name.common}</button>
                                </Link>
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