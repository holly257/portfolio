import React from 'react';
import './AboutPage.css';

function AboutPage() {
    return (
        <main className="main-body">
            <div className="title-text">A B O U T &nbsp;&nbsp; M E</div>
            <div id="about-page">
                <span className="split">
                    <img id="about-img" src="/img/Holly1.jpg" alt="Hey! I am Holly."></img>
                    <h1 id="about-header">Hey,</h1>
                    <h2 id="about-intro">I'm Holly!</h2>
                    <h4 className="about">
                        I am a full stack developer, currently based in the Atlanta area.
                    </h4>
                    <h4 className="about">
                        I have always been loved building things, but I recently discovered full
                        stack development and haven’t been able to stop since!
                    </h4>
                    <h4 className="about">
                        I am looking for the opportunity to join a team of developers and
                        collaborate on new projects. I am hoping to find a team that values learning, mentorship, communication, and delivering a high quality product.
                    </h4>
                    <h4 className="about">
                        In my free time I enjoy traveling, reading, hiking, and working on personal projects.
                    </h4>
                    <h4 className="about">
                        Feel free to reach out or browse some of my recent projects!
                    </h4>
                </span>
            </div>
        </main>
    );
}

export default AboutPage;
