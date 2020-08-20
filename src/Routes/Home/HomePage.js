import React from 'react';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCode,
    faDatabase,
    faTasks,
} from '../../../node_modules/@fortawesome/free-solid-svg-icons';

function HomePage() {
    return (
        <main className="main-body" id="home-page-main">
            <div id="home-page">
                <span className="split">
                    <img
                        id="home-img"
                        src="/img/5.png"
                        alt="Builder, Designer, Leader, Collaborator"
                    ></img>
                </span>
                <span className="split">
                    <div>
                        <h3 className="title-text">Nice to meet you.</h3>
                    </div>
                    <h4 className="home">
                        I am an Atlanta based engineer with a passion for
                        problem solving.
                    </h4>
                    <h4 className="home">
                        I am naturally curious and I enjoy building elegant solutions to problems. I
                        focus on increasing efficiency to help the end user. My technical experience
                        includes JavaScript, React, Node/Express, and Postgres.
                    </h4>
                    <h4 className="home">
                        I am seeking a team that values mentorship, communication, and delivering a
                        high quality product. I am excited to add my skills to your team and hope to
                        talk soon!
                    </h4>
                    <h4 className="home">
                        In my free time I enjoy traveling, reading, hiking, and working on personal
                        projects.
                    </h4>
                </span>
            </div>
            <div className="wrapper-home">
                <div className="skills-box">
                    <FontAwesomeIcon className="center-item" icon={faCode} />
                    <div>
                        <h3 className="project-name center">Frontend</h3>
                        <p className="project-description">
                            I've always had a passion to build and now enjoy bringing new ideas to
                            life. I build apps with a minimalistic, classic style backed by
                            carefully crafted code.
                        </p>
                        <ul className="skills-list">
                            <li>Canva</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React</li>
                        </ul>
                    </div>
                </div>
                <div className="skills-box">
                    <FontAwesomeIcon className="center-item" icon={faDatabase} />
                    <div>
                        <h3 className="project-name center">Backend</h3>

                        <p className="project-description">
                            I love crafting solutions and improving old code! I am passionate about
                            finding thoughtful, clean solutions to problems and inplementing fully
                            tested functionality.
                        </p>
                        <ul className="skills-list">
                            <li>Javascript</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Knex</li>
                            <li>Postgres</li>
                        </ul>
                    </div>
                </div>
                <div className="skills-box">
                    <FontAwesomeIcon className="center-item" icon={faTasks} />
                    <div>
                        <h3 className="project-name center">Testing</h3>
                        <p className="project-description">
                            I believe testing is an integral part of development to ensure full
                            implementation of the design and reliable functionality for the user.
                        </p>
                        <ul className="skills-list">
                            <li>Chai</li>
                            <li>Mocha</li>
                            <li>Jest</li>
                            <li>Enzyme</li>
                            <li>React Testing Library</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;
