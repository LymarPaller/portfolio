import { Link } from "react-router-dom"
import EnterSvg from "../../components/svg/EnterSvg"
import LymarLogo from "../../components/svg/LymarLogo"
import "./landingPage.scss"
import { motion } from "framer-motion"
import Home from "../home/Home"

function LandingPage () {
    const svgAnimVariant = {
        hidden: {
            opacity: 0,
            rotate: -100,
        },
        visible: {
            opacity: 1,
            rotate: 0,
            transition: { duration: 1.2 }
        }
    }

    return (
        <>
        <div className="landing-page-container">
            <LymarLogo 
                variants={svgAnimVariant}
                initial={svgAnimVariant.hidden}
                animate={svgAnimVariant.visible}
            />
            <Link to="/home" className="enter-button">
                <p>Check Portfolio</p>
                <EnterSvg/>
            </Link>
        </div>
        </>
    )
}

export default LandingPage