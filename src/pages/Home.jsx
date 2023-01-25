import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "../components/Search";


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

        // const keyDown = (e) => {
        //     if (e.key === 'Enter') {
        //         navigate(`/search/${search}`)
        //     }
        // }


        return (
            <div  className="home-container">
                <div className="home-header">
                    <h1>Welcome to Country Explorer</h1>
                    <h2> Find your way</h2>
                    <Search />
                </div>
                <div className="population-card-container">
                    {countries.map((country, idx) => {
                        if(country.population === sortedPopulations[0]) {
                            return (
                                <div className="population-card" key={idx}>
                                    <h4>The country with the highest population is: <Link to={`/${country.name.common}`}><h4>{country.name.common}</h4></Link> </h4>
                                    <p>{sortedPopulations[0]} people live in {country.name.common}</p>
                                </div>
                            )
                        } 
                        if (country.population === sortedPopulations[247]) {
                            return (
                                <div className="population-card" key={idx}>
                                    <h4>The country with the lowest population is: <Link to={`/${country.name.common}`}><h4>{country.name.common}</h4></Link> </h4>
                                    <p>{sortedPopulations[247]} people live in {country.name.common}</p>
                                </div>
                            )
                        }
                        return null
                    })}

                </div>

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
            <h1>Loading....</h1>

        )
    }

    return countries ? loaded() : loading()

}

export default Home