// Import the useEffect hook from the React library, as well as the mole image
import { useEffect } from 'react'
import moleImg from '../mole.png'

// Define a functional component called Mole that takes props as its input
const Mole = (props) => {
    // Define an effect that runs after the component mounts and every time the component updates
    useEffect(() => {
        // Generate a random number of seconds between 1 and 10000
        let randSeconds = Math.ceil(Math.random() * 10000)
        // Create a timer that toggles the mole to not display after randSeconds milliseconds
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        // Clean up the timer when the component unmounts or updates
        return () => clearTimeout(timer)
    })

    // Return a div containing the mole image with a click event handler
    return (
        <div>
            <img style={{'width': '20vw'}} src={moleImg} onClick={props.handleClick} />
        </div>
    )
}

// Export the Mole component
export default Mole
