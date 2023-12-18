import { motion } from 'framer-motion'

export function LevelThree(){
  return (
    <motion.section className="overflow-y-auto max-h-[280vh] grid place-items-center h-[100vh]" initial={{ y: -1000 }} animate={{ y: 0 }} exit={{ y: -1000 }} transition={{ duration: 0.3 }}>
      <div className='level three'></div>
    </motion.section>
  )
}