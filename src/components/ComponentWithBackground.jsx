// import React from 'react';
import backgroundImage from '../assets/backgroundimage.jpg'; // Adjust the path to your image

const ComponentWithBackground = () => {
    const styles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'fixed',  // Fix the position to cover the entire viewport
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        filter: 'brightness(70%)',  // Optional: Adjust the z-index if needed
    };

    return (
        <div style={styles}>
            {/* Content of your component */}
        </div>
    );
};

export default ComponentWithBackground;
