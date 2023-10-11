import { NavLink } from "react-router-dom"
import "./navbar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import LymarLogo from "../svg/LymarLogo"
import { useState } from "react"

function Navbar () {

    const [showNavbar, setShowNavbar] = useState(false);

    const toggleNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <>
            <div className="navbar-container">
                <LymarLogo/>
                <nav className={`hidden-navbar ${showNavbar ? 'show-navbar' : ''}`}>
                    <ul className="navbar-wrapper">
                        <li>
                            <NavLink to="/home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/web-developer">Web Dev</NavLink>
                        </li>
                        <li>
                            <NavLink to="/graphic">Graphic Design</NavLink>
                        </li>
                        <div className="button-container">
                            <button>Download CV</button>
                        </div>
                    </ul>
                </nav>
                <div className="toggler-nav" onClick={toggleNavbar}>
                    <FontAwesomeIcon icon={faBars} className="toggler" />
                </div>
            </div>
        </>
    )
}

export default Navbar