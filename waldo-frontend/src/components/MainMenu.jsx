import { motion } from 'framer-motion'

export function MainMenu(){
  return (
    <motion.section 
     className="flex justify-center items-center h-[100vh] w-[100vw]"
     initial={{ y: 1000 }} animate={{ y: 0 }} exit={{ y: 1000 }} transition={{ duration: 0.3 }}
    > 
      <div className='flex flex-col gap-2'>
        <div className='row flex gap-2'>
          <div className='bg-red-400 w-24 h-24 level-cube'></div>
          <div className='bg-red-400 w-24 h-24 level-cube'></div>
          <div className='bg-red-400 w-24 h-24 level-cube'></div>
          <div className='bg-red-400 w-24 h-24 level-cube'></div>
        </div>
        <div className='row flex gap-2'>
          <div className='bg-red-400 w-24 h-24 level-cube'></div>
          <div className='bg-red-400 w-24 h-24 level-cube'></div>
          <div className='bg-red-400 w-24 h-24 level-cube'></div>
          <div className='bg-red-400 w-24 h-24 level-cube'></div>
        </div>
        <div className='row flex gap-2'>
          <div className='bg-red-400 w-24 h-24 level-cube'></div>
          <div className='bg-red-400 w-24 h-24 level-cube'></div>
          <div className='bg-red-400 w-24 h-24 level-cube'></div>
          <div className='bg-red-400 w-24 h-24 level-cube'></div>
        </div>
      </div>
    </motion.section>
  )
}