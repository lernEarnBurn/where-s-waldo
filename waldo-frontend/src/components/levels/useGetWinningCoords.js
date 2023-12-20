import { useState, useEffect } from "react"
import axios from 'axios'

export function useGetWinningCoords(level){
  const [xStart, setXStart] = useState(0)
  const [xEnd, setXEnd] = useState(0)
  const [yStart, setYStart] = useState(0)
  const [yEnd, setYEnd] = useState(0)

  useEffect(() => {
    const getCoords = async() => {
      try{
        const response = await axios.post( `http://localhost:3000/level`, {level: level})
        setXStart(response.data.x_start)
        setXEnd(response.data.x_end)
        setYStart(response.data.y_start)
        setYEnd(response.data.y_end)
        console.log(response.data)
      } catch(err){
        console.log(err)
      }
    }
    getCoords()
  }, [])
  
  return {xStart, xEnd, yStart, yEnd}
}