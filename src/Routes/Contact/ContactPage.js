import React from 'react';
import './ContactPage.css';
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome';
import { faEnvelope, faFileAlt } from '../../../node_modules/@fortawesome/free-solid-svg-icons';

function ContactPage() {
    return (
        <main className="main-body">
            <div>
                <div>
                    <h3 className="title-text">CONTACT</h3>
                </div>
                <div className="contact-container">
                    <li className="contact-item contact-info">
                        <FontAwesomeIcon icon={faEnvelope} className="contact-item" />
                        <li className="contact-item">hollymrogers@gmail.com</li>
                    </li>
                    <br />
                    <li className="contact-item">
                        <img
                            className="contact-logos contact-item"
                            src="/img/GitHub-Mark-32px.png"
                        ></img>
                        <a
                            href="https://github.com/holly257/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-item"
                            tabIndex="6"
                        >
                            Github
                        </a>
                    </li>
                    <br />
                    <li className="contact-item">
                        <img className="contact-logos contact-item" src="/img/LI-In-Bug.png"></img>
                        <a
                            href="https://www.linkedin.com/in/holly-rogers-1194a0178/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-item"
                            tabIndex="7"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <br />
                    <li className="contact-info contact-item">
                        <FontAwesomeIcon className="contact-item" icon={faFileAlt} />
                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-item"
                            tabIndex="7"
                        >
                            &nbsp;Resume
                        </a>
                    </li>
                </div>
            </div>
        </main>
    );
}

export default ContactPage;
