import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import ContinentsSidebar from "../components/Continents";

const ContinentShow = () => {
    const [continent, setContinent] = useState(null)

    const params = useParams()

    const url = 'https://restcountries.com/v3.1/all'


    const getContinent = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setContinent(data)
    }

    useEffect(() => {
        getContinent()
    }, [])


    
    const loaded = () => {
        continent.sort((a, b) => a.name.common.localeCompare(b.name.common))
        return (
            <div className="continent-container">
                <ContinentsSidebar />
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