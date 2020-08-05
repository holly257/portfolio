import React from 'react';
import './PortfolioPage.css';

function PortfolioPage() {
    return (
        <main className="main-body">
            {/* id="portfolio" className="scrolling-box" */}
            <div className="wrapper">
                <div className="gridHead">
                    <h3 className="title-text">P O R T F O L I O</h3>
                </div>
                <div className="one">
                    <img
                        className="pic"
                        src=""
                        alt="Growing Up Screenshot"
                    />
                    <div>
                        <h3>Growing Up</h3>
                        <p>
                            !
                        </p>
                        <section>
                            <h5>HTML, CSS, JavaScript, React, Node.js, SQL, PostgreSQL</h5>
                            <br />
                            <h6 className="portfolioFooter">
                                <a
                                    href="https://holly257.github.io/Quiz-App/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    tabIndex="4"
                                >
                                    APP
                                </a>
                            </h6>
                            <h6 className="portfolioFooter">
                                <a
                                    href="https://github.com/makowilliams/growing-up"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    tabIndex="5"
                                >
                                    CLIENT
                                </a>
                            </h6>
                            <h6 className="portfolioFooter">
                                <a
                                    href="https://github.com/halemd30/growing-up-server"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    tabIndex="5"
                                >
                                    SERVER
                                </a>
                            </h6>
                        </section>
                    </div>
                </div>
                <div className="one">
                    <img
                        id="noteful"
                        className="pic"
                        src="img/Noteful.png"
                        alt="Quiz App Screenshot"
                    />
                    <div>
                        <h3>Noteful</h3>
                        <p>
                            Full stack app that enables users to create their own notes, store them
                            in folders, and update them as needed. It incorporates React Router,
                            PostgreSQL database and uses context to keep user data up to date in
                            each route.
                        </p>
                        <section>
                            <h5>HTML, CSS, JavaScript, React, Node.js, SQL, PostgreSQL</h5>
                            <br />
                            <h6 className="portfolioFooter">
                                <a
                                    href="https://noteful-client-psi-three.now.sh/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    tabIndex="4"
                                >
                                    APP
                                </a>
                            </h6>
                            <h6 className="portfolioFooter">
                                <a
                                    href="https://github.com/holly257/noteful"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    tabIndex="5"
                                >
                                    REPO
                                </a>
                            </h6>
                        </section>
                    </div>
                </div>

                <div className="one">
                    <img
                        id="google-book"
                        className="pic"
                        src="img/GoogleBookSearch-Dog.png"
                        alt="Quiz App Screenshot"
                    />
                    <div>
                        <h3>Book Search</h3>
                        <p>
                            Allows users to find information on books by using the Google Books API
                            and returning data. Users can refine their search requests by both print
                            type and book type.{' '}
                        </p>
                        <section>
                            <h5>HTML, CSS, JavaScript, REST API, React</h5>
                            <br />
                            <h6 className="portfolioFooter">
                                <a
                                    href="https://noteful-client-psi-three.now.sh/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    tabIndex="4"
                                >
                                    APP
                                </a>
                            </h6>
                            <h6 className="portfolioFooter">
                                <a
                                    href="https://github.com/holly257/book-search"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    tabIndex="5"
                                >
                                    REPO
                                </a>
                            </h6>
                        </section>
                    </div>
                </div>

                <div className="one">
                    <img className="pic" src="img/ScreenShot1.png" alt="Quiz App Screenshot" />
                    <div>
                        <h3>MunchMap</h3>
                        <p>
                            Munch Map takes a users input and returns options for resturants in the
                            designated location.
                        </p>
                        <section>
                            <h5>HTML, CSS, Javascript, jQuery, and APIs</h5>
                            <br />
                            <h6 className="portfolioFooter">
                                <a
                                    href="https://holly257.github.io/APIhack-restaurantMap/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    tabIndex="4"
                                >
                                    APP
                                </a>
                            </h6>
                            <h6 className="portfolioFooter">
                                <a
                                    href="https://github.com/holly257/APIhack-restaurantMap"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    tabIndex="5"
                                >
                                    REPO
                                </a>
                            </h6>
                        </section>
                    </div>
                </div>
                <div className="hide"></div>
            </div>
        </main>
    );
}

export default PortfolioPage;
