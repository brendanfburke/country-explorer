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
    
    
    useEffect(() => {
        getCountries();
    }, [])
    
    
    
    
    const loaded = () => {

        const sortedPopulations = []
    
         function  sortPopulation ()  {
    
            const countryList =  countries
            
            for (let i = 0; i < countryList.length; i++) {
                sortedPopulations.push(countryList[i].population)
            }
            sortedPopulations.sort((a, b) => b-a)
        }
        
        const randomNum = Math.floor(Math.random() * (countries.length + 1))


        sortPopulation();


        return (
            <div className="home-container">
                <h1>Welcome to Country Explorer</h1>
                <h2> Find your way</h2>
                {countries.map((country, idx) => {
                    if(country.population === sortedPopulations[0]) {
                        return (
                            <div key={idx}>
                                <h4>The country with the highest population is: <Link to={`/${country.name.common}`}><h4>{country.name.common}</h4></Link> </h4>
                                <p>{sortedPopulations[0]} people live in {country.name.common}</p>
                            </div>
                        )
                    } 
                    if (country.population === sortedPopulations[247]) {
                        return (
                            <div key={idx}>
                                <h4>The country with the lowest population is: <Link to={`/${country.name.common}`}><h4>{country.name.common}</h4></Link> </h4>
                                <p>{sortedPopulations[247]} people live in {country.name.common}</p>
                            </div>
                        )
                    }
                    return null
                })}

                <div className="random-country">
                    <h2>Explore a random country</h2>
                    <Link to={`/${countries[randomNum].name.common}`} >
                    <h4>{countries[randomNum].name.common}</h4>
                    </Link>
                    <p>{countries[randomNum].population} people live in {countries[randomNum].name.common}</p>
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

export default Home