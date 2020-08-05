import React from 'react';
import './PortfolioPage.css';
import myProjects from '../../STORE';
import EachProject from './EachProject';

class PortfolioPage extends React.Component {
    render() {  
        console.log(myProjects.projects)  
        return (
            <main className="main-body">
                {/* id="portfolio" className="scrolling-box" */}
                <div className="wrapper">
                    <div className="gridHead">
                        <h3 className="title-text">P O R T F O L I O</h3>
                    </div>
                    {myProjects.projects.map((project) => {
                        return (
                            <EachProject key={project.id} {...project}/>
                        )
                    })}
                </div>
            </main>
        );
    }
}

export default PortfolioPage;
