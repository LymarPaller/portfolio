import EmailSvg from "../svg/EmailSvg"
import FacebookSvg from "../svg/FacebookSvg"
import InstagramSvg from "../svg/InstagramSvg"
import LinkedinSvg from "../svg/LinkedinSvg"
import PhoneSvg from "../svg/PhoneSvg"
import TwitterSvg from "../svg/TwitterSvg"
import "./contactsection.scss"


function ContactSection () {
    return (
        <>
        <section className="contacts-container">
            <div className="contacts-wrapper">
                <h1>Socials</h1>
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
        </>
    )
}

export default ContactSection