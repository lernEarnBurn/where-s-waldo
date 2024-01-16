import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export function StartMenu(){
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
  };

  const navigate = useNavigate()

  return (
    <motion.section initial={{ y: -1000 }} animate={{ y: 0 }} exit={{ y: -1000 }} transition={{ duration: 0.3 }}>
      <div className="background h-[100vh] grid place-items-center">
        <motion.button
         onClick={() => {navigate('/main-menu')}}
         className="game-button w-[18vw] text-5xl rounded-lg py-5 px-2"
         variants={buttonVariants}
         whileHover="hover"
         whileTap="rest" 
         initial="rest"
         >
          Start Game
        </motion.button>
      </div>
    </motion.section>
  )
}