import './ResumePage.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from './H_Rogers_Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { render } from '@testing-library/react';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class FileViewer extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <main className="resume-main">
                <div>
                    <div>
                        <h3 className="title-text">RESUME</h3>
                    </div>
                    <div className="resume-container">
                        <Document file={resume} onLoadSuccess={this.onDocumentLoadSuccess}>
                            <Page className="page" pageNumber={pageNumber} />
                        </Document>
                        <p>
                            Page {pageNumber} of {numPages}
                        </p>
                        <Link
                            to="/resume/H_Rogers_Resume.pdf"
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
