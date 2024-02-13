
import React from 'react';
import { Link } from 'react-router-dom';
import './LabPractical.css'

const Labpractical = () => {
    return (
        <div className="lab-practical-page">
            <h1>Lab Practical</h1>
            <div className="video-links">
                <Link to="/lab-practice-video" className="video-link">Lab Practice Video</Link>
                <Link to="/guided-video" className="video-link">Guided Video</Link>
            </div>
        </div>
    );
};

export default Labpractical;