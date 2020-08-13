import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileAlt } from '../../../node_modules/@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '../../../node_modules/@fortawesome/free-brands-svg-icons';

class Nav extends Component {
    render() {
        return (
            <div id="footer-container">
                <li className="contact-item contact-info">
                    <FontAwesomeIcon icon={faEnvelope} className="contact-item" />
                    <li className="contact-item">hollymrogers@gmail.com</li>
                </li>
                <br />
                <li className="contact-item">
                    <img
                        className="contact-logos contact-item"
                        src="/img/GitHub-Mark-Light-32px.png"
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
                    <FontAwesomeIcon className="contact-item" icon={faLinkedin} />
                    <a
                        href="https://www.linkedin.com/in/holly-rogers-1194a0178/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-item"
                        tabIndex="7"
                    >
                        &nbsp;LinkedIn
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
        );
    }
}

export default Nav;
