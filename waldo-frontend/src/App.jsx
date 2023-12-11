import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'


import { StartMenu } from './components/StartMenu'
import { MainMenu } from './components/MainMenu'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<StartMenu/>}/>
        <Route path='/main-menu' element={<MainMenu/>}/>
      </Routes>
    </AnimatePresence>
  )
}

export default App
