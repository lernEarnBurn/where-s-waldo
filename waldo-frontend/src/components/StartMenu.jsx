import { motion } from 'framer-motion'

export function StartMenu(){
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
  };

  return (
    <div className="background h-[100vh] grid place-items-center">
      <motion.button
       className="game-button w-[18vw] text-5xl rounded-lg py-5 px-2"
       variants={buttonVariants}
       whileHover="hover"
       whileTap="rest" 
       initial="rest"
       >
        Start Game
      </motion.button>
    </div>
  )
}