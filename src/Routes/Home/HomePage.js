import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        
        // <h2 className="home-intro">Builder, Designer, Leader, Creative, Open-minded, Passionate, Team Driven</h2> */}
    
        <main className="main-body" id="home-page-main">
            <div id="home-page">
                <span className="split">
                    <img id="home-img" src="/img/4.png" alt="Builder, Designer, Leader, Collaborator"></img>
                </span>
                <span className="split">
                    <h1 id="home-header">Nice to meet you,</h1>
                    <h2 id="home-intro">I'm Holly.</h2>
                    <h4 className="home">
                        Full stack web developer with a passion for 
                    </h4>
                    <h4 className="home">
                        I have always been loved building things, but I recently discovered full
                        stack development and haven’t been able to stop since!
                    </h4>
                    <h4 className="home">
                        I am looking for the opportunity to join a team of developers and
                        collaborate on new projects. I am hoping to find a team that values learning, mentorship, communication, and delivering a high quality product.
                    </h4>
                    <h4 className="home">
                        In my free time I enjoy traveling, reading, hiking, and working on personal projects.
                    </h4>
                    <Link to='/contact'>
                        Let's work together
                    </Link>
                </span>
            </div>
        </main>
    );
}

export default HomePage;
