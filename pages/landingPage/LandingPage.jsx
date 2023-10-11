import { Link } from "react-router-dom"
import EnterSvg from "../../components/svg/EnterSvg"
import LymarLogo from "../../components/svg/LymarLogo"
import "./landingPage.scss"
import { AnimatePresence, motion, stagger } from "framer-motion"
import AnimatePage from "../../src/AnimatePage"

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

    const svgPathVariant = {
        hidden: {
            pathLength: 0,
            fill: "rgba(226,0,38,0)",
            stroke:"rgba(225,225,225,0)",
        },
        visible: {
            pathLength: 1,
            fill: "rgba(226,0,38,1)",
            stroke:"rgba(226,0,38,1)",
            transition: {
                duration: 2,
                delay: .1,
            },
        }
    }

    return (
            <AnimatePage>
                <motion.div className="landing-page-container">
                    <LymarLogo 
                        variants={svgAnimVariant}
                        initial={svgAnimVariant.hidden}
                        animate={svgAnimVariant.visible}
                        pathVariant={svgPathVariant}
                        pathInitial={svgPathVariant.hidden}
                        pathAnimate={svgPathVariant.visible}
                    />
                    <Link to="/home" className="enter-button">
                        <p>Check Portfolio</p>
                        <EnterSvg/>
                    </Link>
                </motion.div>
            </AnimatePage>
    )
}

export default LandingPage