import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CountriesBar from "../components/Countries";
import { useParams } from "react-router";
import { useNavigate } from "react-router";


const CountryIndex = (props) => {
    const [countries, setCountries] = useState(null)
    const [letter, setLetter] = useState('')

    const navigate = useNavigate()

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

    
    const handleChange = (e) => {
        let val = e.target.value
        setLetter(val)
        navigate(`/countries/${val}`)

    }
    
    const loaded = () => {
        return (
            <div className="country-index">
                <select onChange={handleChange} className="letter-selector" name="" id="">
                    <option value="#">Choose a Letter</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="G">G</option>
                    <option value="H">H</option>
                    <option value="I">I</option>
                    <option value="J">J</option>
                    <option value="K">K</option>
                    <option value="L">L</option>
                    <option value="M">M</option>
                    <option value="N">N</option>
                    <option value="O">o</option>
                    <option value="P">P</option>
                    <option value="Q">Q</option>
                    <option value="R">R</option>
                    <option value="S">S</option>
                    <option value="T">T</option>
                    <option value="U">U</option>
                    <option value="V">V</option>
                    <option value="W">W</option>
                    <option value="X">X</option>
                    <option value="Y">Y</option>
                    <option value="Z">Z</option>
                </select>
                <CountriesBar />
                <div className="countries-container">
                    {countries.map((country, key) => {
                        if (country.name.common[0] === params.id) {
                            return (
                                <div className="country-card">
                                    <Link to={`/${country.name.common}`} >
                                        <p className="country-name">{country.name.common}</p>
                                    </Link>
                                    <img className="country-index-flag" src={country.flags.svg} alt="" />
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
            <h1>Loading....</h1>
        )
    }

    return countries ? loaded() : loading()
}

export default CountryIndex