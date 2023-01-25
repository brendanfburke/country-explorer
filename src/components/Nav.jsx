import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons'
const Nav = (props) => {

    const [navDrawer, setNavDrawer] = useState("open")

    const drawerClicker = () => {
        if (navDrawer === "open") {
            setNavDrawer("closed")
            console.log("closed")
        } else if (navDrawer === "closed") {
            setNavDrawer("open")
            console.log("open")
        }
    }
    const homeClicker = () => {
        if (navDrawer === "open") {
            setNavDrawer("closed")
        } else return
    }

    return (
        <div className="nav">
            <div className="mobile-nav">
                <div className="icon-box">
                    <Link className="little-screen-show"  to='/' >
                        <FontAwesomeIcon onClick={homeClicker} className="little-screen-show" icon={faHome} size='lg' />
                    </Link>
                    <FontAwesomeIcon onClick={drawerClicker} className="little-screen-show" icon={faBars} size='lg' />
                </div>
                <div className="link-container">
                    <div className={`link-box ${navDrawer}`}>
                        <Link to="/countries">
                            <span onClick={drawerClicker}>All Countries</span>
                        </Link>
                        <Link to="/continents">
                            <span onClick={drawerClicker}>All Continents</span>
                        </Link>
                        <Link to="/flags">
                            <span onClick={drawerClicker}>All Flags</span>
                        </Link>
                    </div>
                </div>

            </div>
            <div className="large-nav">
                <Link to="/" >
                    <h2>Home</h2>
                </Link>
                <Link to="/countries" >
                    <h2>Countries</h2>
                </Link>
                <Link to="/continents" >
                    <h2>Continents</h2>
                </Link>
                <Link to="/flags" >
                    <h2>Flags</h2>
                </Link>
            </div>
        </div>
    )



    // return (
    //     <div className="nav">

    //         <Link className="little-screen-show"  to='/' >
    //             <FontAwesomeIcon className="little-screen-show" icon={faHome} size='lg' />
    //         </Link>
    //         <Link className="big-screen-show" to='/' >
    //             <h2>Home</h2>
    //         </Link>
    //         <Link className="big-screen-show" to='/countries' >
    //                 <h2>See All Countries</h2>
    //         </Link>
    //         <Link className="big-screen-show" to='/continents' >
    //             <h2>See All Continents</h2>
    //         </Link>
    //         <Link className="big-screen-show" to='/flags' >
    //             <h2>See All Flags</h2>
    //         </Link>
    //         <Link className={showLinks} to='/countries' >
    //                 <h2>See All Countries</h2>
    //         </Link>
    //         <Link className={showLinks} to='/continents' >
    //             <h2>See All Continents</h2>
    //         </Link>
    //         <Link className={showLinks} to='/flags' >
    //             <h2>See All Flags</h2>
    //         </Link>
    //         <FontAwesomeIcon onClick={clicker} className="little-screen-show" icon={faBars} size='lg' />
    //     </div>
    // )
}

export default Nav