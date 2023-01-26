import React from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import ContinentsSidebar from "../components/Continents";

const ContinentShow = () => {
    const [continent, setContinent] = useState(null)

    const params = useParams()

    const url = 'https://restcountries.com/v3.1/all'

    const navigate = useNavigate()
    const getContinent = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setContinent(data)
    }

    useEffect(() => {
        getContinent()
    }, [])

    const handleChange = (e) => {
        let val = e.target.value
        navigate(`/continents/${val}`)

    }


    
    const loaded = () => {
        continent.sort((a, b) => a.name.common.localeCompare(b.name.common))
        return (
            <div className="continent-container">
                <ContinentsSidebar />
                <select onChange={handleChange} className="continent-selector" name="" id="">
                    <option value="#">Choose a Continent</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Antarctica">Antarctica</option>
                </select>
                <div className="continent-box">
               {continent.map((continent, idx) => {
                   if (continent.continents[0] === params.id) {
                       return (
                           <div className="continent-card">
                               <Link to={`/${continent.name.common}`} >
                                   <p>{continent.name.common}</p>
                               </Link>
                               <img className="continent-index-flag" src={continent.flags.svg} alt="" />

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

    return continent ? loaded() : loading()

}

export default ContinentShow