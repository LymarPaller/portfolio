import ContactSection from "../../components/contact-section/ContactSection";
import "./webdev.scss";
import webDevSvg from "../../images/iconHighlight1.svg";
import HtmlSvg from "../../components/svg/techStackSvg/HtmlSvg";
import CssSvg from "../../components/svg/techStackSvg/CssSvg";
import SassSvg from "../../components/svg/techStackSvg/SassSvg";
import BootstrapSvg from "../../components/svg/techStackSvg/BootstrapSvg";
import ReactJsSvg from "../../components/svg/techStackSvg/ReactJsSvg";
import PhpSvg from "../../components/svg/techStackSvg/PhpSvg";
import LaravelSvg from "../../components/svg/techStackSvg/LaravelSvg";
import SqlSvg from "../../components/svg/techStackSvg/SqlSvg";
import JavaScriptSvg from "../../components/svg/techStackSvg/JavaScriptSvg";
import kairosImg from "../../images/kairos-sample.png";
import nexusImg from "../../images/nexus-sample.png";
import AppWrapper from "../../components/app-wrapper/AppWrapper";

function WebDev () {
    const frontEndArray = [
        {
            id: 1,
            svg: <HtmlSvg/>
        },
        {
            id: 2,
            svg: <CssSvg/>
        },
        {
            id: 3,
            svg: <SassSvg/>
        },
        {
            id: 4,
            svg: <BootstrapSvg/>
        },
        {
            id: 5,
            svg: <JavaScriptSvg/>
        },
        {
            id: 6,
            svg: <ReactJsSvg/>
        },
    ]

    const backEndArray = [
        {
            id: 1,
            svg: <PhpSvg/>
        },
        {
            id: 2,
            svg: <LaravelSvg/>
        },
        {
            id: 3,
            svg: <SqlSvg/>
        }
    ]

    return (
        <>
            <div className="webdev-main-container">
                <section className="header-container">
                    <div className="circle-container">
                        <img src={webDevSvg} alt="" />
                    </div>
                    <div className="header-wrapper">
                        <p>Welcome to my</p>
                        <h1>Web Dev Journey</h1>
                    </div>
                </section>

                <section className="tech-stacks-container">
                    <h1>Tech Stacks</h1>

                    <div className="tech-stacks-wrapper">
                        <div className="front-end-container circle-container">
                            <h2>Front End</h2>
                            <div className="circle-wrapper">
                                {
                                    frontEndArray.map(frontEndARR =>
                                        <AppWrapper
                                        key={frontEndARR.id}
                                        imgSvg={frontEndARR.svg}
                                        />
                                    )
                                }
                            </div>
                        </div>

                        <div className="back-end-container circle-container">
                            <h2>Back End</h2>
                            <div className="circle-wrapper">
                                {
                                    backEndArray.map(backEndARR =>
                                    <AppWrapper
                                        key={backEndARR.id}
                                        imgSvg={backEndARR.svg}
                                    />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </section>

                <section className="projects-container">
                    <h1>Projects</h1>
                    <div className="projects-wrapper">

                        <div className="kairos-container project-single-container">
                            
                            <div className="project-card">
                                <img src={kairosImg} alt="nexus sample image" />
                            </div>

                            <div className="project-details">

                                <h4>Name:</h4>
                                <p>Kairos Weather App</p>

                                <h4>Description:</h4>
                                <p>
                                    Kairos weather app displays
                                    current weather and 7day
                                    forecast on selected locations.
                                    It also displays advance
                                    weather details like windspeed,
                                    temperature, humidity, sunrise
                                    and sunset.
                                </p>

                                <h4>Tech Used:</h4>
                                <p>HTML5, CSS, JAVASCRIPT</p>

                                <h4>Link:</h4>
                                <a href="https://kairos-weatherapp.vercel.app/">
                                    <p>kairos-weatherapp.vercel.app/</p>
                                </a>

                            </div>
                        </div>

                        <div className="nexus-container project-single-container">

                            <div className="project-card">
                                <img src={nexusImg} alt="kairus sample image" />
                            </div>

                            <div className="project-details">

                                <h4>Name:</h4>
                                <p>Nexus</p>

                                <h4>Description:</h4>
                                <p>
                                    Nexus is a social platform where
                                    you can register, login, follow friends
                                    post status, like and comment
                                </p>

                                <h4>Tech Used:</h4>
                                <p>HTML5, SASS, REACTJS, PHP, LARAVEL</p>

                                <h4>Link:</h4>
                                <a href="https://nexus-three-ruddy.vercel.app/login">
                                    <p>nexus-three-ruddy.vercel.app/login</p>
                                </a>

                            </div>
                        </div>

                    </div>

                </section>
            </div>
        </>
    )
}

export default WebDev