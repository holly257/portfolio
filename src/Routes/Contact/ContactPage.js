import React from 'react';
import './ContactPage.css';

class ContactPage extends React.Component {
    state = { error: null, success: null };

    sendEmail = e => {
        e.preventDefault();
        this.setState({ error: null, success: null });
        const { name, email, message } = e.target;
        console.log(name.value, email.value, message.value);
    };
    render() {
        const { error, success } = this.state;
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
                            <form onSubmit={e => this.sendEmail(e)}>
                                <input
                                    className="card-input"
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                ></input>
                                <input
                                    className="card-input"
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                ></input>
                                <textarea
                                    rows="4"
                                    cols="31"
                                    name="message"
                                    type="text"
                                    wrap="hard"
                                    placeholder="Write Your Message Here"
                                ></textarea>
                                <br />
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
                        </span>
                        <span id="card-hello-right" className="split-contact">
                            <h1 id="card-greeting">Hello.</h1>
                        </span>
                    </div>
                </div>
            </main>
        );
    }
}

export default ContactPage;
