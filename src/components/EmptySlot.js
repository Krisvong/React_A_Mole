import { useEffect } from "react"
import MoleHill from '../molehill.png'

const EmptySlot = ({toggle}) => {

    // useEffect is a hook that allows you to perform side effects in a function component.
    // In this case, it sets a timer to randomly toggle a mole's presence after a certain amount of time has elapsed.
    useEffect(() => {
        // Generate a random amount of time for the mole to appear
        let randSeconds = Math.ceil(Math.random() * 5000)
        // Set a timeout to toggle the mole's presence after the random amount of time has elapsed
        let timer = setTimeout(() => {
            toggle(true)
        }, randSeconds)
        // Return a cleanup function to clear the timeout if the component unmounts before the timeout completes
        return () => clearTimeout(timer)
    }, [toggle])

    // Render an empty slot for the mole to potentially appear
    return (
        <div>
            <img style={{'width': '20vw'}} src={MoleHill} alt="Mole Hill" />
        </div>
    )
}

export default EmptySlot


