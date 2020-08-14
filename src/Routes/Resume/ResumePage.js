import React from 'react';
import './ResumePage.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function ResumePage() {
    return (
        <main className="resume-main">
            <div>
                <div>
                    <h3 className="title-text">RESUME</h3>
                </div>
                <div className="resume-container">
                    <iframe title="resume" class="resume-pdf" src="img/Resume.png">
                       
                    </iframe>
                    <Link to='img/H.Rogers_Resume.pdf' target="_blank" download id='download-btn'><FontAwesomeIcon icon={faDownload} /> Download</Link> 
                </div>
            </div>
        </main>
    );
}

export default ResumePage;
