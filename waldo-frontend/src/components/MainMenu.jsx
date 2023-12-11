import { motion } from 'framer-motion'

export function MainMenu(){
  return (
    <motion.section 
     className="flex justify-center items-center h-[100vh] w-[100vw]"
     initial={{ y: 1000 }} animate={{ y: 0 }} exit={{ y: 1000 }} transition={{ duration: 0.3 }}
    >
      <p>Main Menu</p>
    </motion.section>
  )
}