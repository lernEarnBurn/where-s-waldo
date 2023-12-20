import { motion } from 'framer-motion'
import { useState } from 'react'

import { useGetWinningCoords } from './useGetWinningCoords'
import { Timer } from '../Timer'

export function LevelThree(){
  const [gameOver, setGameOver] = useState(false)
  const [seconds, setSeconds] = useState(0)

  const {xStart, xEnd, yStart, yEnd} = useGetWinningCoords('Level3')

  function checkIfWin(event){
    const x = event.clientX;
    const y = event.clientY;
    console.log( `${x} ${y}`)

    if(x >= xStart && x <= xEnd && y >= yStart && y <=yEnd){
      setGameOver(true)
      console.log('win')
    }else{
      //display animation on miss
    }
  }


  return (
    <motion.section className="overflow-y-auto overflow-x-hidden max-h-[280vh] grid place-items-center h-[100vh]" initial={{ y: -1000 }} animate={{ y: 0 }} exit={{ y: -1000 }} transition={{ duration: 0.3 }}>
      <div className='h-[12vh] w-[100vw] bg-transparent flex justify-evenly items-center'>
        <div className='waldo-icon'></div>
        <Timer gameOver={gameOver} setParentSeconds={setSeconds}/>
      </div>
      <div onClick={checkIfWin} className='level three'></div>
    </motion.section>
  )
}
