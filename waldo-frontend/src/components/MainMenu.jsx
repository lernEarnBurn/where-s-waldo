import { motion } from 'framer-motion'
import { LockKeyhole } from 'lucide-react';

export function MainMenu(){
  return (
    <motion.section 
     className="bg-color flex justify-center items-center h-[100vh] w-[100vw]"
     initial={{ y: 1000 }} animate={{ y: 0 }} exit={{ y: 1000 }} transition={{ duration: 0.3 }}
    > 
      <div className='flex flex-col gap-8'>
        <div className='row flex gap-10'>
          <div className='bg-red-400 w-36 h-36 level-cube'>1</div>
          <div className='bg-red-400 w-36 h-36 level-cube'>2</div>
          <div className='bg-red-400 w-36 h-36 level-cube'>3</div>
          <div className='bg-red-400 w-36 h-36 level-cube'><LockKeyhole className='w-36 h-16'/></div>
        </div>
        <div className='row flex gap-10'>
          <div className='bg-red-400 w-36 h-36 level-cube'><LockKeyhole className='w-36 h-16'/></div>
          <div className='bg-red-400 w-36 h-36 level-cube'><LockKeyhole className='w-36 h-16'/></div>
          <div className='bg-red-400 w-36 h-36 level-cube'><LockKeyhole className='w-36 h-16'/></div>
          <div className='bg-red-400 w-36 h-36 level-cube'><LockKeyhole className='w-36 h-16'/></div>
        </div>
        <div className='row flex gap-10'>
          <div className='bg-red-400 w-36 h-36 level-cube'><LockKeyhole className='w-36 h-16'/></div>
          <div className='bg-red-400 w-36 h-36 level-cube'><LockKeyhole className='w-36 h-16'/></div>
          <div className='bg-red-400 w-36 h-36 level-cube'><LockKeyhole className='w-36 h-16'/></div>
          <div className='bg-red-400 w-36 h-36 level-cube'><LockKeyhole className='w-36 h-16'/></div>
        </div>
      </div>
    </motion.section>
  )
}