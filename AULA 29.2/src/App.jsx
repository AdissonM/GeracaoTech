import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp1 from './componentes/Comp1'

function App() {
  let cor = 'purple'
  let esp = '10px'


  return (
    <>
    <h1> Titutlos </h1>

    <input type='text' placeHolder='digite uma cor'/>

    <Comp1 cor = {cor} estilo = 'solid' esp = {esp}/>
      
    </>
  )
}

export default App
