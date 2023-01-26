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
        

        const numArr = []

        for (let i = 0; i < 6; i++) {
            numArr.push( Math.floor(Math.random() * (countries.length + 1)))
        }


        sortPopulation();



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
                                    <div className="pop-left">
                                        <h2>The country with the highest population is: <Link to={`/${country.name.common}`}><h2 className="country-link">{country.name.common}</h2></Link> </h2>
                                        <p>{sortedPopulations[0].toLocaleString()} people live in {country.name.common}</p>
                                    </div>
                                    <img className="pop-image" src={country.flags.svg} alt="" />
                                </div>
                            )
                        } 
                        if (country.population === sortedPopulations[247]) {
                            return (
                                <div className="population-card" key={idx}>
                                    <div className="pop-left">
                                        <h2>The country with the lowest population is: <Link to={`/${country.name.common}`}><h2 className="country-link">{country.name.common}</h2></Link> </h2>
                                        <p>{sortedPopulations[247].toLocaleString()} people live in {country.name.common}</p>
                                    </div>
                                    <img className="pop-image" src={country.flags.svg} alt="" />
                                </div>
                            )
                        }
                        return null
                    })}

                </div>

                
                <div className="random-container">
                    <div className="random-country1">
                        <div className="pop-left">
                            <h2>Explore a random country</h2>
                            <Link to={`/${countries[numArr[0]].name.common}`} >
                            <h2>{countries[numArr[0]].name.common}</h2>
                            </Link>
                            <p>{countries[numArr[0]].population.toLocaleString()} people live in {countries[numArr[0]].name.common}</p>
                        </div>
                        <img className="random-image" src={countries[numArr[0]].flags.svg} alt="" />
                    </div>
                    <div className="random-country2">
                        <div className="pop-left">
                            <h2>Explore a random country</h2>
                            <Link to={`/${countries[numArr[1]].name.common}`} >
                            <h2>{countries[numArr[1]].name.common}</h2>
                            </Link>
                            <p>{countries[numArr[1]].population.toLocaleString()} people live in {countries[numArr[1]].name.common}</p>
                        </div>
                        <img className="random-image" src={countries[numArr[1]].flags.svg} alt="" />
                    </div>
                    <div className="random-country3">
                        <div className="pop-left">
                            <h2>Explore a random country</h2>
                            <Link to={`/${countries[numArr[2]].name.common}`} >
                            <h2>{countries[numArr[2]].name.common}</h2>
                            </Link>
                            <p>{countries[numArr[2]].population.toLocaleString()} people live in {countries[numArr[2]].name.common}</p>
                        </div>
                        <img className="random-image" src={countries[numArr[2]].flags.svg} alt="" />
                    </div>
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