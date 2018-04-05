import React from 'react';
import SoundCloud from './SoundCloud'

function Music() {
    var styles = {
        height: '800px',
        backgroundColor: 'white'
    };
    return (
        <div style={styles}>
            <h3>Music</h3>
            <SoundCloud />
        </div>
        
    );
}

export default Music;
    
