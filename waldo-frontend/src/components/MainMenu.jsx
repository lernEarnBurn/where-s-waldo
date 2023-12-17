import { motion } from 'framer-motion';
import { LockKeyhole } from 'lucide-react';
import { useNavigate } from 'react-router-dom'

export function MainMenu(){
  const navigate = useNavigate()

  return (
    <motion.section 
      className="bg-color flex justify-center items-center h-[100vh] w-[100vw]"
      initial={{ y: 1000 }} animate={{ y: 0 }} exit={{ y: 1000 }} transition={{ duration: 0.3 }}
    > 
      <div className='flex flex-col gap-8'>
        <div className='row flex gap-10'>
          <div className='bg-red-400 w-36 h-36 level-cube' onClick={() => {navigate('/level-one')}}>1</div>
          <div className='bg-red-400 w-36 h-36 level-cube' onClick={() => {navigate('/level-two')}}>2</div>
          <div className='bg-red-400 w-36 h-36 level-cube' onClick={() => {navigate('/level-three')}}>3</div>
          <motion.div  
            className='bg-red-400 w-36 h-36 level-cube'>
              <motion.div
                className='h-full grid place-items-center'
                initial={{ rotate: 0 }}
                whileTap={{ rotate: [0, -10, 10, -10, 10, 0], transition: { duration: 0.5 } }}
               >
                <LockKeyhole className='w-36 h-16'/>
              </motion.div>
            </motion.div>
        </div>
        <div className='row flex gap-10'>
          <motion.div  
              className='bg-red-400 w-36 h-36 level-cube'>
                <motion.div
                  className='h-full grid place-items-center'
                  initial={{ rotate: 0 }}
                  whileTap={{ rotate: [0, -10, 10, -10, 10, 0], transition: { duration: 0.5 } }}
                 >
                  <LockKeyhole className='w-36 h-16'/>
                </motion.div>
              </motion.div>
              <motion.div  
              className='bg-red-400 w-36 h-36 level-cube'>
                <motion.div
                  className='h-full grid place-items-center'
                  initial={{ rotate: 0 }}
                  whileTap={{ rotate: [0, -10, 10, -10, 10, 0], transition: { duration: 0.5 } }}
                 >
                  <LockKeyhole className='w-36 h-16'/>
                </motion.div>
              </motion.div>
              <motion.div  
              className='bg-red-400 w-36 h-36 level-cube'>
                <motion.div
                  className='h-full grid place-items-center'
                  initial={{ rotate: 0 }}
                  whileTap={{ rotate: [0, -10, 10, -10, 10, 0], transition: { duration: 0.5 } }}
                 >
                  <LockKeyhole className='w-36 h-16'/>
                </motion.div>
              </motion.div>
              <motion.div  
              className='bg-red-400 w-36 h-36 level-cube'>
                <motion.div
                  className='h-full grid place-items-center'
                  initial={{ rotate: 0 }}
                  whileTap={{ rotate: [0, -10, 10, -10, 10, 0], transition: { duration: 0.5 } }}
                 >
                  <LockKeyhole className='w-36 h-16'/>
                </motion.div>
              </motion.div>
          </div>
          <div className='row flex gap-10'>
          <motion.div  
              className='bg-red-400 w-36 h-36 level-cube'>
                <motion.div
                  className='h-full grid place-items-center'
                  initial={{ rotate: 0 }}
                  whileTap={{ rotate: [0, -10, 10, -10, 10, 0], transition: { duration: 0.5 } }}
                 >
                  <LockKeyhole className='w-36 h-16'/>
                </motion.div>
              </motion.div>
              <motion.div  
              className='bg-red-400 w-36 h-36 level-cube'>
                <motion.div
                  className='h-full grid place-items-center'
                  initial={{ rotate: 0 }}
                  whileTap={{ rotate: [0, -10, 10, -10, 10, 0], transition: { duration: 0.5 } }}
                 >
                  <LockKeyhole className='w-36 h-16'/>
                </motion.div>
              </motion.div>
              <motion.div  
              className='bg-red-400 w-36 h-36 level-cube'>
                <motion.div
                  className='h-full grid place-items-center'
                  initial={{ rotate: 0 }}
                  whileTap={{ rotate: [0, -10, 10, -10, 10, 0], transition: { duration: 0.5 } }}
                 >
                  <LockKeyhole className='w-36 h-16'/>
                </motion.div>
              </motion.div>
              <motion.div  
              className='bg-red-400 w-36 h-36 level-cube'>
                <motion.div
                  className='h-full grid place-items-center'
                  initial={{ rotate: 0 }}
                  whileTap={{ rotate: [0, -10, 10, -10, 10, 0], transition: { duration: 0.5 } }}
                 >
                  <LockKeyhole className='w-36 h-16'/>
                </motion.div>
              </motion.div>
          </div>
      </div>
    </motion.section>
  );
}
