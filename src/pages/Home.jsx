import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const Home = (props) => {

    const [countries, setCountries] = useState(null)

    const url = 'https://restcountries.com/v3.1/all'
    
    const getCountries = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setCountries(data)
    }
    
    const sortedPopulations = []

    async function  sortPopulation ()  {

        const countryList = await countries
        
        for (let i = 0; i < countryList.length; i++) {
            sortedPopulations.push(countryList[i].population)
        }
        sortedPopulations.sort((a, b) => b-a)
    }

    sortPopulation()
    
    useEffect(() => {
        getCountries()
    }, [])
    



    const loaded = () => {
        console.log(sortedPopulations)
        return (
            <div className="home-container">
                <h1>Home</h1>
                {countries.map((country, idx) => {
                    if(country.population === sortedPopulations[0]) {
                        return (
                            <div>
                                <h4>The country with the highest population is: <Link to={`/${country.name.common}`}><h4>{country.name.common}</h4></Link> </h4>
                                <p>{sortedPopulations[0]} people live in {country.name.common}</p>
                            </div>
                        )
                    } 
                    if (country.population === sortedPopulations[247]) {
                        return (
                            <div>
                                <h4>The country with the lowest population is: <Link to={`/${country.name.common}`}><h4>{country.name.common}</h4></Link> </h4>
                                <p>{sortedPopulations[247]} people live in {country.name.common}</p>
                            </div>
                        )
                    }
                })}
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

export default Home