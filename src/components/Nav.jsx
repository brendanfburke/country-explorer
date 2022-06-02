import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons'
const Nav = (props) => {

    const [showLinks, setShowLinks] = useState('mobile-hide')

    function clicker() {
        if (showLinks === 'mobile-hide') {
            setShowLinks('mobile-show')
        } else if (showLinks === 'mobile-show') {
            setShowLinks('mobile-hide')
        }

        console.log(showLinks)
    }



    return (
        <div className="nav">

            <Link  to='/' >
                <FontAwesomeIcon className="little-screen-show" icon={faHome} size='lg' />
            </Link>
            <Link className="big-screen-show" to='/' >
                <h2>Home</h2>
            </Link>
            <h2 className="big-screen-show">|</h2>
            <Link className="big-screen-show" to='/countries' >
                    <h2>See All Countries</h2>
            </Link>
            <h2 className="big-screen-show">|</h2>
            <Link className="big-screen-show" to='/continents' >
                <h2>See All Continents</h2>
            </Link>
            <h2 className="big-screen-show">|</h2>
            <Link className="big-screen-show" to='/flags' >
                <h2>See All Flags</h2>
            </Link>
            <Link className={showLinks} to='/countries' >
                    <h2>See All Countries</h2>
            </Link>
            <Link className={showLinks} to='/continents' >
                <h2>See All Continents</h2>
            </Link>
            <Link className={showLinks} to='/flags' >
                <h2>See All Flags</h2>
            </Link>
            <FontAwesomeIcon onClick={clicker} className="little-screen-show" icon={faBars} size='lg' />
        </div>
    )
}

export default Nav