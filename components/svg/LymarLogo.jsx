import { delay, motion } from "framer-motion"

function LymarLogo ({variants, initial, animate, pathVariant, pathInitial, pathAnimate }) {

    return (
        <>
        <motion.svg
            variants={variants}
            initial={initial}
            animate={animate}
            id="main-logo"
            data-name="Layer 2"
            viewBox="0 0 256 259"
            fill="currentcolor"
        >
            <g id="Layer_1-2" data-name="Layer 1">
                    <motion.path
                        variants={pathVariant}
                        initial={pathInitial}
                        animate={pathAnimate}
                    className="cls-1" d="m208,253v-102.5h-65v44.5h-42V48h-40V6h156.11c18.14,0,32.89,14.75,32.89,32.89v62.11c0,7.11-2.22,13.9-6.42,19.65-1.02,1.41-2.17,2.76-3.42,4.01-.92.92-1.85,1.75-2.78,2.48l-3,2.36,3,2.36c.93.73,1.86,1.56,2.78,2.48,1.25,1.25,2.4,2.6,3.41,4,4.21,5.76,6.43,12.55,6.43,19.66v95h-42Zm-65-144.5h65v-38.11c0-12.35-10.04-22.39-22.39-22.39h-42.61v60.5Z"/>
                    <motion.path
                        variants={pathVariant}
                        initial={pathInitial}
                        animate={pathAnimate}
                    className="cls-1" d="m35.89,253c-18.14,0-32.89-14.75-32.89-32.89V6h42v182.61c0,12.35,10.04,22.39,22.39,22.39h75.61v42H35.89Z"/>
            </g>
        </motion.svg>
        </>
    )
}

export default LymarLogo