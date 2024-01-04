import axios from 'axios'
import { useEffect, useState } from 'react'

export function Leaderboard(){

  const { leaderboard, loading } = useGetLeaderboards('Level1')
  

  return (
    <>
   <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        leaderboard.map((item, index) => (
          <p className='text-red-500' key={index}>{item.name}</p>
        ))
      )}
    </>
    </>
  )
}

function useGetLeaderboards(level){
  const [leaderboard, setLeaderBoard] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    

    const getLeaderboard = async() => {
      try {
        const response = await axios.get(`http://localhost:3000/level/${level}`)
        setLeaderBoard(response.data)
        setLoading(false)
        console.log(response.data)
      } catch (err){
        console.log(err)
      }
    }

    getLeaderboard()
  }, [level])

  return { leaderboard, loading }
}