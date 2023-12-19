import { motion } from 'framer-motion'

export function LevelOne(){
  return (
    <motion.section className="  overflow-x-hidden overflow-y-auto max-h-[280vh] grid place-items-center h-[100vh]" initial={{ y: -1000 }} animate={{ y: 0 }} exit={{ y: -1000 }} transition={{ duration: 0.3 }}>
      <div className='h-[12vh] bg-transparent'></div>
      <div className='level one ml-2'></div>
    </motion.section>

  )
}