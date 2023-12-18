import { motion } from 'framer-motion'

export function LevelTwo(){
  return (
      <motion.section className="overflow-y-auto max-h-[150vh] grid place-items-center h-[100vh]" initial={{ y: -1000 }} animate={{ y: 0 }} exit={{ y: -1000 }} transition={{ duration: 0.3 }}>
        <div className='level two'></div>
      </motion.section>
  )
}