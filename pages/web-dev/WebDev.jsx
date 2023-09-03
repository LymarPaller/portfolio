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

function WebDev () {
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
                        <div className="front-end-container">
                            <h2>Front End</h2>
                            <div className="circle-wrapper">
                                <div className="tech-stack-circle">
                                    <HtmlSvg/>
                                </div>
                                <div className="tech-stack-circle">
                                    <CssSvg/>
                                </div>
                                <div className="tech-stack-circle">
                                    <SassSvg/>
                                </div>
                                <div className="tech-stack-circle">
                                    <BootstrapSvg/>
                                </div>
                                <div className="tech-stack-circle">
                                    <ReactJsSvg/>
                                </div>
                            </div>
                        </div>

                        <div className="back-end-container">
                            <h2>Back End</h2>
                            <div className="circle-wrapper">
                                <div className="tech-stack-circle">
                                    <PhpSvg/>
                                </div>
                                <div className="tech-stack-circle">
                                    <LaravelSvg/>
                                </div>
                                <div className="tech-stack-circle">
                                    <SqlSvg/>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="projects-container">
                    <h1>Projects</h1>

                </section>

                <ContactSection/>
            </div>
        </>
    )
}

export default WebDev