import {useState, useEffect } from 'react'
import PropTypes from 'prop-types';


export function Timer(props){
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if(props.gameOver === false){
                setSeconds(seconds => seconds + 1)
            }else{
                sendUpSeconds()
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [props.gameOver])

    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60


    function sendUpSeconds(){
        props.setParentSeconds(seconds)
    }

    return (
        <h1 className='text-4xl'>{minutes.toString().padStart(2, '0')}:{remainingSeconds.toString().padStart(2, '0')}</h1>
    )
}


Timer.propTypes = {
    gameOver: PropTypes.bool.isRequired,
    setParentSeconds: PropTypes.func.isRequired
}