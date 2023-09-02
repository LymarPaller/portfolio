import { Link, NavLink } from "react-router-dom"
import logo from "../../images/logoLemar.svg"
import "./navbar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faHamburger, faTimes } from "@fortawesome/free-solid-svg-icons"

function Navbar () {



    return (
        <>
            <div className="navbar-container container-fluid">
                <img src={logo} alt="lymar logo"/>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/webdev">Web Dev</NavLink>
                        </li>
                        <li>
                            <NavLink to="/graphic">Graphic Design</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="button-container">
                    <button>Download CV</button>
                </div>
                <div className="toggler-nav">
                    <FontAwesomeIcon icon={faBars} className="logout-xmark" />
                </div>
            </div>
        </>
    )
}

export default Navbar