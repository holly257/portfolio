import React from 'react';
import './PortfolioPage.css';
import myProjects from '../../STORE';
import EachProject from './EachProject';

class PortfolioPage extends React.Component {
    render() {
        return (
            <main className="main-body">
                <div className="wrapper">
                    <div className="gridHead">
                        <h3 className="title-text">PORTFOLIO</h3>
                    </div>
                    {myProjects.projects.map(project => {
                        return <EachProject key={project.id} {...project} />;
                    })}
                </div>
            </main>
        );
    }
}

export default PortfolioPage;
