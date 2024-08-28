import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Nav } from './components/Nav'
import { Home } from './components/Home'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'

function App() {
  

  return (
    <>
     <Nav/>
     <Home/>
     <Skills/>
     <Contact/>
    </>
  )
}

export default App
