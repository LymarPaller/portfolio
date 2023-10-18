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
                            <a href="mailto:lymar.paller101@gmail.com">
                                <EmailSvg/>
                                <p>lymar.paller101@gmail.com</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/lymar-paul-paller-b60a0a28b/">
                                <LinkedinSvg/>
                                <p>Lymar Paul Paller</p>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/cantleavethisempty">
                                <FacebookSvg/>
                                <p>@cantleavethisempty</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/touchmenot1994/">
                                <InstagramSvg/>
                                <p>@touchmenot1994</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/Touch_MeN0t">
                                <TwitterSvg/>
                                <p>@Touch_MeN0t</p>
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