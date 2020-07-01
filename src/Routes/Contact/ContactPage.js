import React from 'react';
import './ContactPage.css';

function ContactPage() {
    return (
        <main classNameName="main-body">
            <h5 id="contact">Contact Me:</h5>
            <ul>
                <li className="contact-info">hollymrogers@gmail.com</li>
                <li className="contact-info">
                    <a href="https://github.com/holly257/" target="_blank" tabindex="6">
                        Github
                    </a>
                </li>
                <li className="contact-info">
                    <a
                        href="https://www.linkedin.com/in/holly-rogers-1194a0178/"
                        target="_blank"
                        tabindex="7"
                    >
                        LinkedIn
                    </a>
                </li>
            </ul>
        </main>
    );
}

export default ContactPage;
