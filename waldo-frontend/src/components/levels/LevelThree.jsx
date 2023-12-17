import { motion } from 'framer-motion'

export function LevelThree(){
  return (
    <motion.section className="grid place-items-center h-[100vh]" initial={{ y: -1000 }} animate={{ y: 0 }} exit={{ y: -1000 }} transition={{ duration: 0.3 }}>
      <p>Level Three</p>
    </motion.section>
  )
}