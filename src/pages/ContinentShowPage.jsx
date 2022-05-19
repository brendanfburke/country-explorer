import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import ContinentsSidebar from "../components/Continents";

const ContinentShow = () => {
    const [continent, setContinent] = useState(null)

    const params = useParams()

    const url = 'https://restcountries.com/v3.1/all'

    console.log(params.id)

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
            <div className="continent-show-container">
                <ContinentsSidebar />
                <div className="continent-container">
               {continent.map((continent, idx) => {
                   if (continent.continents[0] === params.id) {
                       return (
                           <div className="continent-country">
                               <Link to={`/${continent.name.common}`} >
                                   <p>{continent.name.common}</p>
                               </Link>
                           </div>
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

    return continent ? loaded() : loading()

}

export default ContinentShow