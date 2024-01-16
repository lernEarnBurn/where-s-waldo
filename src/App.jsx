import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'


import { StartMenu } from './components/StartMenu'
import { MainMenu } from './components/MainMenu'
import { LevelOne } from './components/levels/LevelOne'
import { LevelTwo } from './components/levels/LevelTwo'
import { LevelThree } from './components/levels/LevelThree'
import { Leaderboard } from './components/Leaderboard'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<StartMenu/>}/>
        <Route path='/main-menu' element={<MainMenu/>}/>
        <Route path='/level-one' element={<LevelOne/>}/>
        <Route path='/level-two' element={<LevelTwo/>}/>
        <Route path='/level-three' element={<LevelThree/>}/>
        <Route path='/:level/leaderboard' element={<Leaderboard/>}/>


      </Routes>
    </AnimatePresence>
  )
}

export default App
