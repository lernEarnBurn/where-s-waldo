import axios from 'axios'
import { useEffect, useState } from 'react'
import { ArrowBigLeft } from 'lucide-react';
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export function Leaderboard(){

  const navigate = useNavigate()

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
  };


  const { leaderboard, loading } = useGetLeaderboards()
  

  return (
   <section className='flex gap-2 flex-col items-center justify-center'>
    <div className='flex gap-56 mt-9'>
      <h1 className='relative left-5 text-2xl header-clr'>Leaders</h1>
      <h1 className='text-2xl header-clr'>Seconds</h1>
    </div>
    <div className=' rounded-lg border-red-400 border-2'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          leaderboard.map((item, index) => (
            <div key={index} className={`flex justify-between py-1 px-10 w-[30vw] ${index > 0 ? 'border-t-2 border-red-400' : ''}`}>
              <p className='text-xl ml-3'>{item.name}</p>
              <p className='text-xl mr-6'>{item.totalSeconds}</p>
            </div>
          ))
        )}
      </div>
      <motion.button
       className='rounded-lg game-button back-pos w-16 h-13 grid place-items-center'
       variants={buttonVariants}
       whileHover="hover"
       whileTap="rest" 
       initial="rest"
       onClick={() => {navigate('/main-menu')}}
       >
        <ArrowBigLeft height={45} width={60}/>
      </motion.button>
    </section>
  )
}

function useGetLeaderboards(){
  const [leaderboard, setLeaderBoard] = useState([])
  const [loading, setLoading] = useState(true)
  const level = useState(localStorage.getItem('level'))

  useEffect(() => {
    

    const getLeaderboard = async() => {
      try {
        const response = await axios.get(`http://localhost:3000/level/${level[0]}`)
        setLeaderBoard(response.data)
        setLoading(false)
        console.log(response.data)
      } catch (err){
        console.log(err)
      }
    }

    getLeaderboard()
  }, [])

  return { leaderboard, loading }
}