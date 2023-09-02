import { Link, NavLink } from "react-router-dom"
import logo from "../../images/logoLemar.svg"
import "./navbar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

function Navbar () {



    return (
        <>
            <div className="navbar-container container-fluid">
                <img src={logo} alt="lymar logo"/>
                <div>
                {/* <FontAwesomeIcon icon={faTimes} className="logout-xmark" /> */}
                </div>
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
                <div>
                    <button>Download CV</button>
                </div>
            </div>
        </>
    )
}

export default Navbar