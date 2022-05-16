import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ContinentIndex = (props) => {
    const [continents, setcontinents] = useState(null)

    const url = 'https://restcountries.com/v3.1/all'

    const getContinents = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setcontinents(data)
    }

    useEffect(() => {
        getContinents()
    }, [])



    const loaded = () => {
        return (
            <div className="continents-container">
            <div className="europe">
                <h2>Europe</h2>
                {continents.map((countries, idx) => {
                    if (countries.continents[0] === "Europe") {
                        return (
                            <Link key={idx} to={`/${countries.name.common}`}>
                                <button>{countries.name.common}</button>
                            </Link>
                        )
                    }
                })}
            </div>
            <div className="africa">
            <h2>Africa</h2>
                {continents.map((countries, idx) => {
                    if (countries.continents[0] === "Africa") {
                        return (
                            <Link to={`/${countries.name.common}`}>
                                <button>{countries.name.common}</button>
                            </Link>
                        )
                    }
                })}
            </div>
            <div className="asia">
            <h2>Asia</h2>
                {continents.map((countries, idx) => {
                    if (countries.continents[0] === "Asia") {
                        return (
                            <Link key={idx} to={`/${countries.name.common}`}>
                                <button>{countries.name.common}</button>
                            </Link>
                        )
                    }
                })}
            </div>
            <div className="south-america">
            <h2>South America</h2>
                {continents.map((countries, idx) => {
                    if (countries.continents[0] === "South America") {
                        return (
                            <Link key={idx} to={`/${countries.name.common}`}>
                                <button>{countries.name.common}</button>
                            </Link>
                        )
                    }
                })}
            </div>
            <div className="north-america">
            <h2>North America</h2>
                {continents.map((countries, idx) => {
                    if (countries.continents[0] === "North America") {
                        return (
                            <Link key={idx} to={`/${countries.name.common}`}>
                                <button>{countries.name.common}</button>
                            </Link>
                        )
                    }
                })}
            </div>
            <div className="oceania">
            <h2>Oceania</h2>
                {continents.map((countries, idx) => {
                    if (countries.continents[0] === "Oceania") {
                        return (
                            <Link key={idx} to={`/${countries.name.common}`}>
                                <button>{countries.name.common}</button>
                            </Link>
                        )
                    }
                })}
            </div>
            <div className="antarctica">
            <h2>Antarctica</h2>
                {continents.map((countries, idx) => {
                    if (countries.continents[0] === "Antarctica") {
                        return (
                            <Link key={idx} to={`/${countries.name.common}`}>
                                <button>{countries.name.common}</button>
                            </Link>
                        )
                    }
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

    return continents ? loaded() : loading()
}

export default ContinentIndex