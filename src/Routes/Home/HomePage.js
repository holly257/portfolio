import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <main className="main-body" id="home">
            <div className='split_home'>
                <img id='profile-image' src=''/>
            </div>
            <div className='split_home'> 
                {/* <h1 className="home-intro">W E L C O M E !</h1>
                <h2 className="home-intro">Builder, Designer, Leader, Creative, Open-minded, Passionate, Team Driven</h2> */}
                <Link id='more_link' to='/about'>Learn More</Link>
            </div>
        </main>
    );
}

export default HomePage;
