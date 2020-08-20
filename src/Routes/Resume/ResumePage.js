import './ResumePage.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { render } from '@testing-library/react';

export default class FileViewer extends Component {
    render() {
        return (
            <main className="resume-main">
                <div>
                    <div>
                        <h3 className="title-text">RESUME</h3>
                    </div>
                    <div className="resume-container">
                        <object
                            className="pdf-frame"
                            data="/resume/H.Rogers_Resume.pdf"
                            type="application/pdf"
                        >
                            <iframe src="https://docs.google.com/document/d/e/2PACX-1vQopOFcFDSXOQJHDV_mVeNaAkLDbt9RIrW7J9SR7HwAnwQvEBasL7XG8euSCdIT6x8XLy-VX11oHu6M/pub?embedded=true"></iframe>
                        </object>

                        <Link
                            to="/resume/H.Rogers_Resume.pdf"
                            target="_blank"
                            download
                            id="download-btn"
                        >
                            <FontAwesomeIcon icon={faDownload} /> Download
                        </Link>
                    </div>
                </div>
            </main>
        );
    }
}
