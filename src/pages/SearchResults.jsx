import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const SearchResults = () => {

    const [results, setResults] = useState(null)

    const params = useParams()
    const url = 'https://restcountries.com/v3.1/name/'

    useEffect(() => {
        const getResults = async () => {
            const response = await fetch(`${url}${params.id}`)
            const data = await response.json()
            setResults(data)
        };
        getResults();
        
        
        
        
    }, [params.id, url] )

    let displayResults



    
    
    
    const loaded = () => {
        if (results.status === 404 ) {
            displayResults = <h1>Sorry no results, search again!</h1>
            
        } else {
            results.sort((a, b) => a.name.common.localeCompare(b.name.common))
            return (
            <div className="search-results-container">
                {displayResults =   results.map((country, idx) => {
                       return (
                           <div key={idx} className="continent-country">
                               <Link to={`/${country.name.common}`} >
                                   <p>{country.name.common}</p>
                               </Link>
           
                           </div>
                       )
                   })}
            </div>
            )
        }
        
        return displayResults

    }

    const loading = () => {
        return (
            <h1>Loading....</h1>

        )
    }

    
    return results ? loaded() : loading()
}

export default SearchResults