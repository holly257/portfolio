import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons';

class Nav extends Component {
    state = {
        hiddenDropdown: true,
    };

    toggleDropdown = () => {
        this.setState(prevState => ({
            hiddenDropdown: !prevState.hiddenDropdown,
        }));
    };

    render() {
        const { hiddenDropdown } = this.state;

        return (
            <nav id="nav-bar">
                <Link id="nav-home-link" to={'/'}>
                    <img id="logo" src="/favicon.ico" alt="HR personal logo"></img>
                </Link>

                <span id="right-nav">
                    <FontAwesomeIcon
                        icon={hiddenDropdown ? faBars : faWindowClose}
                        id="nav-bars"
                        onClick={this.toggleDropdown}
                    />
                    <div id={`${hiddenDropdown ? 'nav-hide' : 'nav-show'}`}>
                        <Link onClick={this.toggleDropdown} className="nav-link" to={'/'}>
                            Home
                        </Link>
                        <Link onClick={this.toggleDropdown} className="nav-link" to={'/portfolio'}>
                            Portfolio
                        </Link>
                        <Link onClick={this.toggleDropdown} className="nav-link" to={'/contact'}>
                            Contact
                        </Link>
                    </div>
                </span>
            </nav>
        );
    }
}

export default Nav;
