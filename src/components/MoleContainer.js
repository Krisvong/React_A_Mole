import { useState } from 'react';
import Mole from './Mole'; // import the Mole component
import EmptySlot from './EmptySlot'; // import the EmptySlot component

const MoleContainer = (props) => { // define a new component called MoleContainer that takes in props
  const [theMole, setTheMole] = useState(false); // define state using the useState hook - theMole is initialized to false and setTheMole is a function that updates it

  const handleClick = (e) => { // define a function that handles clicking on the mole
    props.setScore(props.score + 1); // update the score by calling the setScore function from props and passing in the current score incremented by 1
    setTheMole(false); // set theMole to false, which will hide the mole
  };

  const displayMole = theMole ? ( // use a ternary operator to determine whether to display the Mole or EmptySlot component
    <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> // if theMole is true, display the Mole component and pass in props
  ) : (
    <EmptySlot toggle={setTheMole} /> // if theMole is false, display the EmptySlot component and pass in toggle (which is setTheMole)
  );

  return <div className="MoleContainer">{displayMole}</div>; // render the MoleContainer component with the displayMole variable (which will be either Mole or EmptySlot)
};

export default MoleContainer; // export the MoleContainer component for use in other files



