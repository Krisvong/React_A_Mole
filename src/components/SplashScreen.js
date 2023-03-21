import React from 'react'; // import the React library

import splashImage from '../mole.png'; // import the image file

// define a functional component called SplashScreen that takes a prop called startGame
const SplashScreen = ({ startGame }) => {
  // the component returns some JSX
  return (
    <div>
      {/* display the imported image */}
      <img style={{ 'width': '30vw' }} src={splashImage} alt="Splash Screen" />

      {/* display a button and call the startGame function when it's clicked */}
      <div className="start-button-container">
        <button onClick={startGame}>Start</button>
      </div>
    </div>
  );
};

export default SplashScreen; // export the SplashScreen component for use in other files


