import "./home.scss"
import FacebookSvg from "../../components/svg/FacebookSvg"
import InstagramSvg from "../../components/svg/InstagramSvg"
import LinkedinSvg from "../../components/svg/LinkedinSvg"

function Home () {
    return (
        <>
        <div className="home-container">
            <section className="profile">
                <div className="name-container">
                    <p className="intro">Hello, I'm</p>
                    <h1>Lymar Paller</h1>

                    <div className="intro-container">
                        <p>I am a <span>Full-Stack Web Developer</span></p>
                        <p>and a <span>Graphic Designer</span></p>
                    </div>

                    <div className="social-container">
                        <FacebookSvg/>
                        <InstagramSvg/>
                        <LinkedinSvg/>
                    </div>
                </div>
                
                <div className="photo-container">
                    <div>
                        {/* <img src={profileBlack} alt="profile" /> */}
                    </div>
                    
                </div>
            </section>

            <section className="introduction-container">

            </section>
            <section></section>
            <section></section>
            <section></section>
        </div>
        </>
    )
}

export default Home