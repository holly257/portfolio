import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <main className="main-body" id="home">
            <div id="home-page">
                <div className='split_home'>
                    <img id="about-img" src="/img/Portfolio_hero.png" alt="Builder, Designer, Leader, Collaborator"></img>
                </div>
                <div className='split_home'> 
                    {/* <h1 className="home-intro">W E L C O M E !</h1>
                    <h2 className="home-intro">Builder, Designer, Leader, Creative, Open-minded, Passionate, Team Driven</h2> */}
                    <Link id='more_link' to='/about'>Learn More</Link>
                </div>
            </div>
        </main>
    );
}

export default HomePage;
