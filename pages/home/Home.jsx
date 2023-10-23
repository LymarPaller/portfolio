import "./home.scss"
import webDevSvg from "../../images/iconHighlight1.svg"
import graphicSvg from "../../images/iconHighlight2.svg"
import { Link } from "react-router-dom"
import ContactSection from "../../components/contact-section/ContactSection"
import profileRed from "../../images/profile-red small.png"
import AnimatePage from "../../src/AnimatePage"

function Home () {

    return (
        <>
        <div className="home-container">
            <section className="profile">
                <div className="name-container">
                    <p className="intro">Hello, I'm</p>
                    <h1>
                        Lymar Paller
                    </h1>

                    <div className="intro-container">
                        <p>I am a <span>Full-Stack Web Developer</span></p>
                        <p>and a <span>Graphic Designer</span></p>
                    </div>
                </div>
                
                <div className="photo-container">
                    <img src={profileRed} alt="profile-pic" className="profile-photo"/>
                </div>
            </section>

            <section className="introduction-container">
                <div className="intro-wrapper">
                    <h1>Introduction</h1>
                    <p>
                        Greetings, I'm Lymar Paul Paller,  a 28-year-old freelance graphic designer with six years of expertise.
                        Recently, I graduated from the KODEGO Bootcamp, transitioning into the world of web development.
                        Feel free to call me Lymar a moniker that reflects both my professional persona and my approachability.
                        I look forward to weaving my graphic design background into the world of web development,
                        creating holistic digital experiences that resonate with users.
                    </p>
                </div>
            </section>

            <section className="highlights-container">
                <div className="highlights-wrapper">
                    <h1>Portfolio Highlights</h1>
                    <div className="highlight-card">
                        <Link to="/web-developer">
                            <div className="card dev-card">
                                <div className="circle-card">
                                    <img src={webDevSvg} alt="web dev" className="dev-image"/>
                                </div>
                                <h2 className="dev-title">Full-Stack Web Developer</h2>
                                <p className="dev-button">View Details</p>
                            </div>
                        </Link>
                        
                        <Link to="/graphic-artist">
                            <div className="card artist-card">
                                <div className="circle-card">
                                    <img src={graphicSvg} alt="graphic" className="artist-image" />
                                </div>
                                <h2 className="artist-title">Graphic Designer</h2>
                                <p className="artist-button">View Details</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default Home