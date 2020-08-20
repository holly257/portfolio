import React from 'react';
import './ContactPage.css';

class ContactPage extends React.Component {
    state = { error: null, success: null };

    render() {
        const { error, success } = this.state;
        return (
            <main className="main-body">
                <div>
                    <div>
                        <h3 className="title-text">CONTACT</h3>
                    </div>
                    <div className="contact-container">
                        <span id="card-hello-top" className="split-contact">
                            <h1 id="card-greeting">Hello,</h1>
                        </span>
                        <span className="split-contact contact-card">
                            <form
                                accept-charset="utf-8"
                                action="https://formspree.io/hollymrogers12@gmail.com"
                                method="post"
                            >
                                <input
                                    className="card-input"
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                ></input>
                                <br />
                                <input
                                    className="card-input"
                                    type="email"
                                    id="email"
                                    name="_replyto"
                                    required
                                    placeholder="you@email.com"
                                ></input>
                                <br />
                                <textarea
                                    rows="4"
                                    cols="31"
                                    name="message"
                                    type="text"
                                    wrap="hard"
                                    required
                                    placeholder="Write Your Message Here"
                                ></textarea>
                                <br />
                                <input
                                    type="hidden"
                                    name="_subject"
                                    id="email-subject"
                                    value="Contact Form Submission"
                                ></input>
                                <button type="submit" id="send-email">
                                    SEND
                                </button>
                                {success && (
                                    <p className="email_error">Sorry, something went wrong</p>
                                )}
                                {error && (
                                    <p className="email_error">Sorry, something went wrong</p>
                                )}
                            </form>
                            {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe7FVUQd_hDnluRCYkyOUgDrK0PL8XWEOEaAAqLDQ-cOSY73A/viewform?embedded=true" width="640" height="765" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                        </span>
                    </div>
                </div>
            </main>
        );
    }
}

export default ContactPage;
