import axios from 'axios'
import { useEffect, useState } from 'react'

export function Leaderboard(){

  const { leaderboard, loading } = useGetLeaderboards()
  

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