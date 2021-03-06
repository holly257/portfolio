import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faEnvelope } from '../../../node_modules/@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '../../../node_modules/@fortawesome/free-brands-svg-icons';

class Nav extends Component {
    render() {
        return (
            <div id="footer-container">
                

                <span id="connect-icons">
                    <Link className="contact-item" id='contact-connect' to='/contact'>Let's Connect!</Link>
                    <li className="contact-info contact-item">
                        <a
                            href="mailto:hollymrogers12@gmail.com"
                            target="_blank"
                            download
                            rel="noopener noreferrer"
                            className="contact-item"
                        >
                            <FontAwesomeIcon className="contact-item" icon={faEnvelope} />
                        </a>
                    </li>
                    <li className="contact-item">
                        <a
                            href="https://github.com/holly257/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-item"
                        >
                            <img
                                className="contact-logos contact-item"
                                alt="github link"
                                id='test'
                                src="/img/GitHub-Mark-Light-32px.png"
                            ></img>
                        </a>
                    </li>
                    <li className="contact-item">
                        <a
                            href="https://www.linkedin.com/in/holly-rogers-1194a0178/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-item"
                        >
                            <FontAwesomeIcon className="contact-item" icon={faLinkedin} />
                        </a>
                    </li>
                    <li className="contact-info contact-item">
                        <a
                            href="/resume/H.Rogers_Resume.pdf"
                            target="_blank"
                            download
                            rel="noopener noreferrer"
                            className="contact-item"
                        >
                            <FontAwesomeIcon className="contact-item" icon={faFileAlt} />
                        </a>
                    </li>
                    
                </span>
            </div>
        );
    }
}

export default Nav;
