import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente1 from './componentes/Componente1'
import Imagens from './componentes/Imagens'

function App() {

  let estiloTitulo3 = {
    blackgroundColor:'red', 
    color: 'lightBlue'
  }

  let azul = true
  let estiloBotao = {
    backgroundColor: azul == true ? 'blue': 'gray', // IF ternario //
    color:'white',
    padding: '10px'

  }

  return (
    <>
    <div>
      <h1> Aula 27 </h1>
      <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus cupiditate quae consectetur? Aliquam laboriosam in totam nisi! Quos, alias. Maiores ipsa voluptatem quis hic. Exercitationem molestiae itaque vero expedita ea. </p>
    
    <h1> Titulo 2 </h1>
    <p className='paragrafo1'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta cumque, totam saepe dignissimos non consectetur fuga necessitatibus. Enim iste quos, repudiandae, tenetur in vitae facilis quas dolor delectus, impedit quo.</p>

    {/* CSS Inline */}
    <h1 style={estiloTitulo3}> Titulo 3 </h1>
    <p style={{backgroundColor: 'gray', color:'white'}}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta cumque, totam saepe dignissimos non consectetur fuga necessitatibus. Enim iste quos, repudiandae, tenetur in vitae facilis quas dolor delectus, impedit quo.</p>

    <button style = {{estiloBotao}}>Clique Aqui</button>
    </div>
    <Componente1/>
    <Imagens/>
    </>
  )
}

export default App
