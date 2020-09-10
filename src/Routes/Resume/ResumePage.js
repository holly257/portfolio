import './ResumePage.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default class FileViewer extends Component {
    render() {
        return (
            <main className="resume-main">
                <div>
                    <h3 className="title-text">RESUME</h3>
                </div>
                <div className="resume-container">
                    <object
                        className="pdf-frame"
                        data="/resume/H.Rogers_Resume.pdf"
                        type="application/pdf"
                    >
                        <iframe
                            title="myResume"
                            src="https://docs.google.com/document/d/e/2PACX-1vTxpzfgrOq4vt9G6mPcJpPLt6AMdWWahfXiNBiAj5fwQ8-WFjlsSvOjNLxJz3T08bgoImx3aJoSXHit/pub?embedded=true"
                        ></iframe>
                    </object>

                    <section id="link-cont">
                        <Link
                            to="/resume/H.Rogers_Resume.pdf"
                            target="_blank"
                            download
                            id="download-btn"
                        >
                            <FontAwesomeIcon icon={faDownload} /> Download
                        </Link>
                    </section>
                </div>
            </main>
        );
    }
}
