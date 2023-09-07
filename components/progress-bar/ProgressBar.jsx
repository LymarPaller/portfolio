import "./progressBar.scss";
import { motion, useScroll } from "framer-motion";

function ProgressBar () {
  const { scrollYProgress } = useScroll();
  const scrollProgress = scrollYProgress.get();
  console.log(scrollProgress)

    return (
        <>
        <motion.div className="progress-bar-top"
            style={{
                scaleX: scrollProgress,
                position: "fixed",
                transformOrigin: "0% 0%",
            }}
        >
        </motion.div>
        </>
    )
}

export default ProgressBar