import './App.css'
import { Routes, Route } from 'react-router-dom'

import { StartMenu } from './components/StartMenu'

function App() {

  return (
    <Routes>
      <Route path='/' element={<StartMenu/>}/>
    </Routes>
  )
}

export default App
