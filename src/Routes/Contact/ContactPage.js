import React from 'react';
import './ContactPage.css';

function ContactPage() {
    return (
        <main className="main-body">
            <div>
                <div>
                    <h3 className="title-text">CONTACT</h3>
                </div>
                <div className="contact-container contact-card">
                    <span id="card-hello-top" className="split-contact">
                        <h1 id="card-greeting">Hello,</h1>
                    </span>
                    <span className="split-contact">
                        <form>
                            <input
                                className="card-input"
                                type="text"
                                id="name"
                                placeholder="Your Name"
                            ></input>
                            <input
                                className="card-input"
                                type="text"
                                id="email"
                                placeholder="Your Email"
                            ></input>
                            <textarea
                                rows="4"
                                cols="20"
                                name="message"
                                type="text"
                                wrap="hard"
                                placeholder="Write Your Message Here"
                            ></textarea>
                            <br />
                            <button id="send-email">SEND</button>
                        </form>
                    </span>
                    <span id="card-hello-right" className="split-contact">
                        <h1 id="card-greeting">Hello.</h1>
                    </span>
                </div>
            </div>
        </main>
    );
}

export default ContactPage;
