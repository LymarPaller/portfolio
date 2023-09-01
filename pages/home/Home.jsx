import "./home.scss"
import FacebookSvg from "../../components/svg/FacebookSvg"
import InstagramSvg from "../../components/svg/InstagramSvg"
import LinkedinSvg from "../../components/svg/LinkedinSvg"
import PhoneSvg from "../../components/svg/PhoneSvg"
import EmailSvg from "../../components/svg/EmailSvg"
import TwitterSvg from "../../components/svg/TwitterSvg"

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

                        <div className="card-wrapper">
                            <div className="card">
                                <div className="icon-div"></div>
                                <h2>Full-Stack Web Developer</h2>
                                <a href="#"><p>Details</p></a>
                            </div>
                        </div>

                        <div className="card-wrapper">
                            <div className="card">
                                <div className="icon-div"></div>
                                <h2>Graphic Designer</h2>
                                <a href="#"><p>Details</p></a>
                            </div>
                        </div>
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