import { motion } from "framer-motion";


const pageAnimVar = {
    hidden: {
        opacity: 0,
        y: -100
    },
    visible: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 0,
        y: 100
    }
}
const AnimatePage = ({ children }) => {

    return (
        <motion.div
            variants={pageAnimVar}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{duration: .8}}
        >
            {children}
        </motion.div>
    )
}

export default AnimatePage;