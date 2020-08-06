import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <main className="main-body" id="home">
            <div>
                <h1 className="home-intro">H O L L Y &nbsp;&nbsp; R O G E R S</h1>
                <h3 id="home-info">Full Stack Developer</h3>
                <img id='profile-image' src='/img/IMG_1942.jpg'/>
            </div>
        </main>
    );
}

export default HomePage;
