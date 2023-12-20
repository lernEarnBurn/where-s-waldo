import { motion } from 'framer-motion'
import { useState } from 'react'

import { Timer } from '../Timer'

export function LevelThree(){
  const [gameOver, setGameOver] = useState(false)
  const [seconds, setSeconds] = useState(0)

  return (
    <motion.section className="overflow-y-auto overflow-x-hidden max-h-[280vh] grid place-items-center h-[100vh]" initial={{ y: -1000 }} animate={{ y: 0 }} exit={{ y: -1000 }} transition={{ duration: 0.3 }}>
      <div className='h-[12vh] w-[100vw] bg-transparent flex justify-evenly items-center'>
        <div className='waldo-icon'></div>
        <Timer gameOver={gameOver} setParentSeconds={setSeconds}/>
      </div>
      <div className='level three'></div>
    </motion.section>
  )
}