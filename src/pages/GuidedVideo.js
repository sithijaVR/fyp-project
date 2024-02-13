import React from 'react';
import ReactPlayer from 'react-player';
import './VideoGalleryPage.css'; // Import your CSS file for styling

const GuidedVideoPage = () => {
    return (
        <div className="video-gallery">
            <h1>Guided Video</h1>
            <div className="video-grid">
                <div className="video-item">
                    <ReactPlayer
                        url={require('./tutorial/A simple Project using Factory IO.mp4')}
                        controls
                        width="100%"
                        height="100%"
                    />
                </div>
                <div className="video-item">
                    <ReactPlayer
                        url={require('./tutorial/A simple Project using Factory IO.mp4')}
                        controls
                        width="100%"
                        height="100%"
                    />
                </div>
                <div className="video-item">
                    <ReactPlayer
                        url={require('./tutorial/Setting up TIA Portal with Factory IO.mp4')}
                        controls
                        width="100%"
                        height="100%"
                    />
                </div>
                <div className="video-item">
                    <ReactPlayer
                        url={require('./tutorial/Starting with Factory IO.mp4')}
                        controls
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </div>
    );
};

export default GuidedVideoPage;