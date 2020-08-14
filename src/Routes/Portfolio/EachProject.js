import React from 'react';
import './PortfolioPage.css';

class EachProject extends React.Component {
    render() {
        return (
            <div className="one">
                <img className="pic" src={this.props.image} alt={this.props.image_alt} />
                <div>
                    <h3 className="project-name">{this.props.name}</h3>
                    <p className="project-description">{this.props.description}</p>
                    <section>
                        <h5 className="project-tech">{this.props.tech}</h5>
                        <br />
                        <h6 className="portfolioFooter">
                            <a
                                href={this.props.live_app}
                                target="_blank"
                                rel="noopener noreferrer"
                                tabIndex="4"
                            >
                                APP
                            </a>
                        </h6>
                        <h6 className="portfolioFooter">
                            <a
                                href={this.props.client || this.props.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                tabIndex="5"
                            >
                                CLIENT
                            </a>
                        </h6>
                        {!this.props.server ? null : (
                            <h6 className="portfolioFooter">
                                <a
                                    href={this.props.server}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    tabIndex="5"
                                >
                                    SERVER
                                </a>
                            </h6>
                        )}
                    </section>
                </div>
            </div>
        );
    }
}

export default EachProject;
