import { motion } from 'framer-motion'
import { useState } from 'react'

import { Timer } from '../Timer'

export function LevelOne(){
  const [gameOver, setGameOver] = useState(false)
  const [seconds, setSeconds] = useState(0)

  function checkIfWin(event){
    const x = event.clientX;
    const y = event.clientY;

    if(x >= xWinStart && x <= xWinEnd && y >= yWinStart && y <=yWinEnd){
      setGameOver(true)
    }else{
      //display animation on miss
    }
  }

  return (
    <motion.section className="  overflow-x-hidden overflow-y-auto max-h-[280vh] grid place-items-center h-[100vh]" initial={{ y: -1000 }} animate={{ y: 0 }} exit={{ y: -1000 }} transition={{ duration: 0.3 }}>
      <div className='h-[12vh] w-[100vw] bg-transparent flex justify-evenly items-center'>
        <div className='waldo-icon'></div>
        <Timer gameOver={gameOver} setParentSeconds={setSeconds}/>
      </div>
      <div onClick={checkIfWin} className='level one'></div>
    </motion.section>
  )
}

//add a custom hook that fetches the coords (maybe the leaderboards also) but also places each 
//coord in the correct var as said above