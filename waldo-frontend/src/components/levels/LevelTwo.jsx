import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { storePlayerLocally } from './storePlayerLocally'

import { Timer } from '../Timer'

export function LevelTwo(){
  const [gameOver, setGameOver] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const [playerName, setPlayerName] = useState('')


  const [missElements, setMissElements] = useState([]);


  function checkIfWin(event){
    const x = event.clientX;
    const y = event.clientY;
    console.log( `${x} ${y}`)

    if(x >= 1240 && x <= 1270 && y >= 112 && y <= 204){
      setGameOver(true)
      setOpenModal(true)
      console.log('win')
    }else{
      const missElementKey = Date.now();
      setMissElements((prevMissElements) => [
        ...prevMissElements,
        { key: missElementKey, x, y },
      ]);

      setTimeout(() => {
        setMissElements((prevMissElements) =>
          prevMissElements.filter((el) => el.key !== missElementKey)
        );
      }, 700);
    }
  }

  const navigate = useNavigate()

  async function transitionToLeaderboards(){
    if(playerName != ''){
      setOpenModal(false)
      storePlayerLocally(playerName, seconds)
      navigate('/level-two/leaderboard')      
    }
  }

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
  };
  
  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  function getSeconds(seconds){
    setSeconds(seconds)
  }

  useEffect(() => {
    localStorage.setItem('level', 'Level2')
  }, [])

  return (
      <motion.section className="overflow-y-auto overflow-x-hidden max-h-[150vh] grid place-items-center h-[100vh]" initial={{ y: -1000 }} animate={{ y: 0 }} exit={{ y: -1000 }} transition={{ duration: 0.3 }}>
        <div className='h-[12vh] w-[100vw] bg-transparent flex justify-evenly items-center'>
          <div className='waldo-icon'></div>
          <Timer gameOver={gameOver} setParentSeconds={getSeconds}/>
        </div>
        <div onClick={checkIfWin} className='level two'>
          <AnimatePresence>
            {missElements.map(({ key, x, y }) => (
              <motion.div
                 key={key}
                 className='text-red-600 text-6xl h-10 w-10 absolute pointer-events-none font-mono' 
                 style={{ left: `${x - 20}px`, top: `${y - 20}px` }}
                 initial={{ opacity: 0, rotate: 0 }}
                 animate={{ opacity: 1, rotate: 360 }}
                 exit={{ opacity: 0, rotate: 360 }}
                 transition={{ duration: .4 }}
                 >
                  X
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <dialog open={openModal} className='h-36 w-72 rounded-lg bg-color items-center justify-center gap-3'>
          <input onChange={handleNameChange} className='ml-8 mt-6 mb-4 py-2 px-2 w-56 rounded-sm h-8 text-xl' placeholder='Name'/>
          <motion.button variants={buttonVariants}
           whileHover="hover"
           whileTap="rest" 
           initial="rest" 
           onClick={transitionToLeaderboards} 
           className='ml-8 game-button w-56 h-12 text-lg rounded-lg'>Submit</motion.button>
      </dialog>
      </motion.section>
  )
}