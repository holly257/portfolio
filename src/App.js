import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Routes/Nav/Nav';
import HomePage from './Routes/Home/HomePage';
import AboutPage from './Routes/About/AboutPage';
import ContactPage from './Routes/Contact/ContactPage';
import PortfolioPage from './Routes/Portfolio/PortfolioPage';
import NotFoundPage from './Routes/NotFound/NotFoundPage';
import './App.css';

function App() {
    return (
        <>
            <nav>
                <Nav />
            </nav>
            <main className="App">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/portfolio" component={PortfolioPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </main>
        </>
    );
}

export default App;
