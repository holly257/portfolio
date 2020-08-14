import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase } from '../../../node_modules/@fortawesome/free-solid-svg-icons';


function HomePage() {
    return (
        // <h2 className="home-intro">Builder, Designer, Leader, Creative, Open-minded, Passionate, Team Driven</h2> */}

        <main className="main-body" id="home-page-main">
            <div id="home-page">
                <span className="split">
                    <img
                        id="home-img"
                        src="/img/4.png"
                        alt="Builder, Designer, Leader, Collaborator"
                    ></img>
                </span>
                <span className="split">
                    <div>
                        <h3 className="title-text">Nice to meet you.</h3>
                    </div>
                    <h4 className="home">
                        My name is Holly and I am an Atlanta based engineer with a passion for
                        problem solving.
                    </h4>
                    <h4 className="home">
                        I enjoy building and finding elegant solutions to problems that increase efficieny and help the end user. 
                        I am looking for the opportunity to join a team of developers that values
                        learning, mentorship, communication, and delivering a high quality product.
                    </h4>
                    <h4 className="home">
                        In my free time I enjoy traveling, reading, hiking, and working on personal
                        projects.
                    </h4>
                </span>
            </div>
            <div className="wrapper-home">
                <div className="gridHead-home">
                    <h3 className="title-text">PORTFOLIO</h3>
                </div>
                <div className="skills-box">
                    <FontAwesomeIcon className='center-item' icon={faCode} />
                    <div>
                        <h3 className="project-name center">Frontend</h3>
                        <p className="project-description">I've always had a passion to build and now enjoy bringing new ideas to life. I build apps with a minimalistic, classic style backed by carefully crafted code.</p>
                        <ul className='skills-list'>
                            <li>Canva</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React</li>
                        </ul>
                    </div>
                </div>
                <div className="skills-box">
                <FontAwesomeIcon className='center-item' icon={faDatabase} />
                    <div>
                        <h3 className="project-name center">Backend</h3>
                        <p className="project-description">I love crafting solutions and improving old code! I am passionate about finding thoughtful, clean solutions to problems and inplementing fully tested functionality.</p>
                        <ul className='skills-list'>
                            <li>Javascript</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Knex</li>
                            <li>Postgres</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;
