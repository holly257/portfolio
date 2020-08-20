import React, { Component } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '../../../node_modules/@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '../../../node_modules/@fortawesome/free-brands-svg-icons';

class Nav extends Component {
    render() {
        return (
            <div id="footer-container">
                <span id="connect-email">
                    <p className="contact-item">Let's Connect!</p>
                    <br />
                    <p className="contact-item contact-info">&nbsp; hollymrogers12@gmail.com</p>
                </span>

                <span id="connect-icons">
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
                        ></a>
                    </li>
                    <li className="contact-item">
                        <FontAwesomeIcon className="contact-item" icon={faLinkedin} />
                        <a
                            href="https://www.linkedin.com/in/holly-rogers-1194a0178/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-item"
                            tabIndex="7"
                        ></a>
                    </li>
                    <li className="contact-info contact-item">
                        <FontAwesomeIcon className="contact-item" icon={faFileAlt} />
                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-item"
                            tabIndex="7"
                        ></a>
                    </li>
                </span>
            </div>
        );
    }
}

export default Nav;
