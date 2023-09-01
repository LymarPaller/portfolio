import "./home.scss"
import FacebookSvg from "../../components/svg/FacebookSvg"
import InstagramSvg from "../../components/svg/InstagramSvg"
import LinkedinSvg from "../../components/svg/LinkedinSvg"
import PhoneSvg from "../../components/svg/PhoneSvg"
import EmailSvg from "../../components/svg/EmailSvg"
import TwitterSvg from "../../components/svg/TwitterSvg"
import Navbar from "../../components/navbar/Navbar"
import webDevSvg from "../../images/iconHighlight1.svg"
import graphicSvg from "../../images/iconHighlight2.svg"
import { useEffect } from "react"

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
            let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
            let yAxis = (window.innerHeight / 2 - e.pageY) / 20;

            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
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

                    <div className="social-container">
                        <a href="https://www.facebook.com/cantleavethisempty" target="blank">
                            <FacebookSvg/>
                        </a>
                        <a href="https://www.instagram.com" target="blank">
                            <InstagramSvg/>
                        </a>
                        <a href="https://www.linkedin.com" target="blank">
                            <LinkedinSvg/>
                        </a>
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
                        <a href="./webdev">
                            <div className="card-wrapper dev-wrapper">
                                <div className="card dev-card">
                                    <div className="icon-div">{/* circle div dont delete */}</div>
                                    <img src={webDevSvg} alt="web dev" className="dev-image"/>
                                    <h2 className="dev-title">Full-Stack Web Developer</h2>
                                    <p className="dev-button">View Details</p>
                                </div>
                            </div>
                        </a>
                        
                        <a href="./">
                            <div className="card-wrapper artist-wrapper">
                                <div className="card artist-card">
                                    <div className="icon-div">{/* circle div dont delete */}</div>
                                    <img src={graphicSvg} alt="graphic" className="artist-image" />
                                    <h2 className="artist-title">Graphic Designer</h2>
                                    <a href="#" className="artist-button"><p>View Details</p></a>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

            </section>

            <section className="contacts-container">
                <div className="contacts-wrapper">
                    <h1>Contacts</h1>
                    <div className="contacts-card">
                        <ul>
                            <li>
                                <a href="#">
                                    <PhoneSvg/>
                                    <p>09271444046</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <EmailSvg/>
                                    <p>lymar.paller101@gmail.com</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <LinkedinSvg/>
                                    <p>@placeholder</p>
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="#">
                                    <FacebookSvg/>
                                    <p>@placeholder</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <InstagramSvg/>
                                    <p>@placeholder</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <TwitterSvg/>
                                    <p>@placeholder</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
        </div>
        </>
    )
}

export default Home