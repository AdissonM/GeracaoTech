import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp1 from './componentes/Comp1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1> Bom dia O sol ja nasce lá na Fazendinha! </h1>
     <Comp1/>


    </>
  )
}

export default App
