import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Route, RouterProvider, Routes } from 'react-router'
import { Home } from './Componets/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
