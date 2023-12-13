import lottie from "lottie-web"
import { createRef, useEffect } from "react"
import animation from "../../animations/maintenancesmall.json"
import "./maintenance.scss"


function Maintenance () {
    let animationContainer = createRef();

    useEffect(()=> {

        document.title = "Lymar | Graphic Design";

        const anim = lottie.loadAnimation({
             container: animationContainer.current,
             animationData: animation,
             rendererSettings: {
             }
        })
        return () => anim.destroy();

    }, [])

    return (
        <>
            <div className="animation-container" ref={animationContainer}></div>
        </>


    )
}

export default Maintenance