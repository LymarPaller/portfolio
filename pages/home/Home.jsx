import "./home.scss"
import Navbar from "../../components/navbar/Navbar"
import webDevSvg from "../../images/iconHighlight1.svg"
import graphicSvg from "../../images/iconHighlight2.svg"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import ContactSection from "../../components/contact-section/ContactSection"

function Home () {

    useEffect(() => {
        const devCard = document.querySelector(".dev-card");
        const devWrapper = document.querySelector(".dev-wrapper");
        const artCard = document.querySelector(".artist-card");
        const artWrapper = document.querySelector(".artist-wrapper");
        const devImage = document.querySelector(".dev-image");
        const devTitle = document.querySelector(".dev-title");
        const devButton = document.querySelector(".dev-button");
        const artImage = document.querySelector(".artist-image");
        const artTitle = document.querySelector(".artist-title");
        const artButton = document.querySelector(".artist-button");
        
        function handleMouseMove(e, card) {
            const cardRect = card.getBoundingClientRect();
            const xAxis = (e.clientX - cardRect.left - cardRect.width / 2) / 20;
            let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
            
            card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
        }
        
        devWrapper.addEventListener("mousemove", (e) => {handleMouseMove(e, devCard);});
        
        artWrapper.addEventListener("mousemove", (e) => {handleMouseMove(e, artCard);});

        //mouse hover in

        devWrapper.addEventListener("mouseenter", e => {
            devCard.style.transition = "100ms";

            devImage.style.transform = "translateZ(100px)";
            devTitle.style.transform = "translateZ(100px)";
            devButton.style.transform = "translateZ(100px)";
        })

        artWrapper.addEventListener("mouseenter", e => {
            artCard.style.transition = "100ms";

            artImage.style.transform = "translateZ(100px)";
            artTitle.style.transform = "translateZ(100px)";
            artButton.style.transform = "translateZ(100px)";
        })

        //mouse hover out

        devWrapper.addEventListener("mouseleave", e => {
            devCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
            devCard.style.transition = "all 500ms ease";

            devImage.style.transform = "translateZ(0)";
            devTitle.style.transform = "translateZ(0)";
            devButton.style.transform = "translateZ(0)";
        })
        artWrapper.addEventListener("mouseleave", e => {
            artCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
            artCard.style.transition = "all 500ms ease";
            
            artImage.style.transform = "translateZ(0)";
            artTitle.style.transform = "translateZ(0)";
            artButton.style.transform = "translateZ(0)";
        })
    }, [])

    return (
        <>
        <div className="home-container">
            <Navbar/>
            <section className="profile">
                <div className="name-container">
                    <p className="intro">Hello, I'm</p>
                    <h1>Lymar Paller</h1>

                    <div className="intro-container">
                        <p>I am a <span>Full-Stack Web Developer</span></p>
                        <p>and a <span>Graphic Designer</span></p>
                    </div>
                </div>
                
                <div className="photo-container">
                    <div>
                        {/* DONT DELETE */}
                        {/* <img src={profileBlack} alt="profile" /> */}
                    </div>
                    
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
                        <Link to="./webdev">
                            <div className="card-wrapper dev-wrapper">
                                <div className="card dev-card">
                                    <div className="icon-div">{/* circle div dont delete */}</div>
                                    <img src={webDevSvg} alt="web dev" className="dev-image"/>
                                    <h2 className="dev-title">Full-Stack Web Developer</h2>
                                    <p className="dev-button">View Details</p>
                                </div>
                            </div>
                        </Link>
                        
                        <Link to="./">
                            <div className="card-wrapper artist-wrapper">
                                <div className="card artist-card">
                                    <div className="icon-div">{/* circle div dont delete */}</div>
                                    <img src={graphicSvg} alt="graphic" className="artist-image" />
                                    <h2 className="artist-title">Graphic Designer</h2>
                                    <p className="artist-button">View Details</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <ContactSection/>
        </div>
        </>
    )
}

export default Home