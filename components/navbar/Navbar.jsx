import { Link, NavLink } from "react-router-dom"
import "./navbar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import LymarLogo from "../svg/LymarLogo"
import { useState } from "react"
import { motion } from "framer-motion"

function Navbar () {

    const [showNavbar, setShowNavbar] = useState(false);

    const toggleNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    const onHoverAnimVariant = {
        static: {
            scale: 0,
        },
        hover: {
            scale: 1.15
        }
    }

    return (
        <>
            <div className="navbar-container">
                <LymarLogo/>
                <nav className={`hidden-navbar ${showNavbar ? 'show-navbar' : ''}`}>
                    <ul className="navbar-wrapper">

                        <motion.li
                        variants={onHoverAnimVariant}
                        whileHover="hover"
                        >
                            <Link to="/home">Home</Link>
                        </motion.li>

                        <motion.li
                        variants={onHoverAnimVariant}
                        whileHover="hover"
                        >
                            <Link to="/web-developer">Web Dev</Link>
                        </motion.li>

                        <motion.li
                        variants={onHoverAnimVariant}
                        whileHover="hover"
                        >
                            <Link to="/graphic">Graphic Design</Link>
                        </motion.li>

                        <motion.div
                        className="button-container"
                        variants={onHoverAnimVariant}
                        whileHover="hover"
                        >
                            <a href="/Lymar Paul Paller - Updated Final.pdf">
                                <button>Download CV</button>
                            </a>
                        </motion.div>
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