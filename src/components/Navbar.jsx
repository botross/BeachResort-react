import React from 'react'
import Logo from "../images/logo.svg"
import { Link } from 'react-router-dom'
import { FaAlignRight } from "react-icons/fa";
import {useState} from 'react';
function Navbar() {
    let [isToggle , SetToggle] = useState(false)

    const handleToggle = () => {
        SetToggle(!isToggle)
    }

    return (
        <nav>
            <div className='navbar'>
                <div className='nav-center'>
                        <div className='nav-header'>
                            <Link to="/"><img src={Logo} alt="beach resort" /></Link> 
                            <button type="button" className="nav-btn" onClick={handleToggle} >
                            <FaAlignRight className="nav-icon" />
                            </button>
                        </div>
                                <ul className={isToggle ? 'nav-links show-nav' : "nav-links"}>
                                    <li> <Link to="/"> Home </Link>  </li>
                                    <li> <Link to="/Rooms"> All Rooms </Link> </li>
                                    <li> <Link to="/filterRooms"> Filter Rooms </Link> </li>
                                </ul>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar
