import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Routes/Nav/Nav';
import HomePage from './Routes/Home/HomePage';
import ContactPage from './Routes/Contact/ContactPage';
import PortfolioPage from './Routes/Portfolio/PortfolioPage';
import NotFoundPage from './Routes/NotFound/NotFoundPage';
import Footer from './Routes/Footer/Footer';
import ResumePage from './Routes/Resume/ResumePage';
import './App.css';

function App() {
    return (
        <div className="main-app">
            <nav>
                <Nav />
            </nav>
            <main className="App">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/portfolio" component={PortfolioPage} />
                    <Route path="/resume" component={ResumePage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </main>
            <nav>
                <Footer />
            </nav>
        </div>
    );
}

export default App;
