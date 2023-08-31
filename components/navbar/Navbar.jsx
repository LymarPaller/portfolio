import { Link, NavLink } from "react-router-dom"
import logo from "../../images/logoLemar.svg"
import "./navbar.scss"

function Navbar () {



    return (
        <>
            <div className="navbar-container">
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
                <div>
                    <button>Download</button>
                </div>
            </div>
        </>
    )
}

export default Navbar