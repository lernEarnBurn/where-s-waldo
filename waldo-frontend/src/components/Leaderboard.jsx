import axios from 'axios'
import { useEffect, useState } from 'react'

export function Leaderboard(){

  const { leaderboard } = useGetLeaderboards('Level1')

  return (
    <>
    {leaderboard.map((item, index) => {
      return <p key={index}>{item.name}</p>
    })}
    </>
  )
}

function useGetLeaderboards(level){
  const [Leaderboard, setLeaderBoard] = useState([])

  useEffect(() => {
    const getLeaderboard = async() => {
      try {
        const response = await axios.get(`http://localhost:3000/level/${level}`)
        setLeaderBoard(response.data)
        console.log(response.data)
      } catch (err){
        console.log(err)
      }
    }

    getLeaderboard()
  }, [])

  return { Leaderboard }
}