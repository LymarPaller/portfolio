import { Link } from "react-router-dom"
import EnterSvg from "../../components/svg/EnterSvg"
import LymarLogo from "../../components/svg/LymarLogo"
import "./landingPage.scss"
import { AnimatePresence, cubicBezier, easeIn, easeInOut, easeOut, motion, spring, stagger } from "framer-motion"

function LandingPage () {

    const easeLoading = cubicBezier(.10,.50,.10,.2)

    const wrapperAnimVariantReveal = {
        hidden: {
            scaleX: 0,
        },
        visible: {
            scaleX: 1,
            transition: {
                delay: 1,
                duration: 2,
                ease: easeLoading
            }
        }

    }

    const wrapperAnimVariant = {
        hidden: {
            scaleY: .01,
        },
        visible: {
            scaleY: 1,
            transition: {
                delay: 3.2,
                duration: .8,
                delayChildren: 4,
                ease: easeInOut
            }
        }
    }

    const svgAnimVariant = {
        hidden: {
            opacity: 0,
            rotate: -100,
        },
        visible: {
            opacity: 1,
            rotate: 0,
            transition: {duration: 1, staggerChildren: .5}
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
                duration: 1.5,
            },
        }
    }

    return (
        <>
        <motion.div 
        className="wrapper-reveal"
        variants={wrapperAnimVariantReveal}
        initial="hidden"
        animate="visible"
        >
            <motion.div
            className="landing-page-container"
            variants={wrapperAnimVariant}
            initial="hidden"
            animate="visible"
            >
                <LymarLogo 
                    variants={svgAnimVariant}
                    initial={svgAnimVariant.hidden}
                    animate={svgAnimVariant.visible}
                    pathVariant={svgPathVariant}
                    pathInitial={svgPathVariant.hidden}
                    pathAnimate={svgPathVariant.visible}
                />
                <Link
                to="/home"
                >
                    <motion.div
                    className="enter-button"
                    initial={{y: 100, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{
                        delay: 5.5,
                        duration: .8,
                        ease: "easeInOut"
                    }}>
                        
                    <p>Check Portfolio</p>
                    <EnterSvg/>

                    </motion.div>
                </Link>
            </motion.div>
        </motion.div>
        <div className="loading-text">
            <p>Loading...</p>
        </div>
        </>
    )
}

export default LandingPage