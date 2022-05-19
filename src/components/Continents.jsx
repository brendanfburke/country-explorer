import React from "react";
import { Link } from "react-router-dom";

const ContinentsSidebar = () => {
    return (
        <div className="continents-sidebar">
            <Link to='/continents/Europe' >
                <p>Europe</p>
            </Link>
            <Link to='/continents/Asia' >
                <p>Asia</p>
            </Link>
            <Link to='/continents/Africa' >
                <p>Africa</p>
            </Link>
            <Link to='/continents/North%20America' >
                <p>North America</p>
            </Link>
            <Link to='/continents/South%20America' >
                <p>South America</p>
            </Link>
            <Link to='/continents/Oceania' >
                <p>Oceania</p>
            </Link>
            <Link to='/continents/Antarctica' >
                <p>Antarctica</p>
            </Link>
        </div>
    )
}

export default ContinentsSidebar