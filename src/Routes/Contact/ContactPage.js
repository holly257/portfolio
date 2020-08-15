import React from 'react';
import './ContactPage.css';

class ContactPage extends React.Component {
    state = { error: null, success: null };

    sendEmail = e => {
        e.preventDefault();
        this.setState({ error: null, success: null });
        const { name, email, message } = e.target;
        console.log(name.value, email.value, message.value);

        // if(name.value && email.value && message.value){
        //     $.ajax({
        //         url: 'https://formspree.io/hollymrogers12@gmail.com',
        //         method: 'POST',
        //         data: $(this).serialize(),
        //         dataType: 'json'
        //     })
        // }
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
                            <form accept-charset="utf-8" action="https://formspree.io/hollymrogers12@gmail.com" method="post">
                                <input
                                    className="card-input"
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                ></input>
                                <br/>
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
                                <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"></input>
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
