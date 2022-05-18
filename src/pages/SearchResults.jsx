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
             displayResults =   results.map((country, idx) => {
                    return (
                        <div key={idx} className="search-result">
                            <Link to={`/${country.name.common}`} >
                                <h2>{country.name.common}</h2>
                            </Link>
                            <h3>{country.name.official}</h3>
        
                        </div>
                    )
                })
        }
        
        return displayResults

    }

    const loading = () => {
        return (
            <img className="loading" src="https://c.tenor.com/hlKEXPvlX48AAAAi/loading-loader.gif" alt='loading gif' />

        )
    }

    
    return results ? loaded() : loading()
}

export default SearchResults