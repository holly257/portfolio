import React from 'react';
import './ContactPage.css';
import config from '../../config';

class ContactPage extends React.Component {
    state = { error: null, success: null };

    SubmitContact = e => {
        e.preventDefault();
        this.setState({ error: null, success: null });

        const { email, message, name } = e.target;

        const email_info = {
            contact_name: name.value,
            email_from: email.value,
            email_body: message.value,
        };

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(email_info),
        };

        fetch(config.API_ENDPOINT, options)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error;
                    });
                }
                return res.json();
            })
            .then(data => {
                this.setState({ success: 'Your email has been sent!' });
            })
            .catch(error => {
                this.setState({ error: 'Sorry, the email did not send. Please try again later.' });
            });
    };

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
                                onSubmit={e => {
                                    this.SubmitContact(e);
                                }}
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
                                {success && <p className="email_error">{success}</p>}
                                {error && <p className="email_error">{error}</p>}
                            </form>
                        </span>
                    </div>
                </div>
            </main>
        );
    }
}

export default ContactPage;
