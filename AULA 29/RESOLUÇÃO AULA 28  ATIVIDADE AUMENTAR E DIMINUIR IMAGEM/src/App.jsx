import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente1 from './componentes'
import Imagens from './componentes/Imagens.jsx'



function App() {

  let estiloTitulo3 = {
    backgroundColor:'Red',
    color:'lightBlue'
  }

  let azul = true

  let estiloBotao = {
    backgroundColor: azul ? 'blue':'gray',
    color:'white',
    padding: '10px'
  }

  return (
    <>
      <div>
        <h1>Aula 28</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ex ipsum assumenda omnis, minus dolore iure exercitationem porro consectetur dolores earum provident temporibus saepe consequuntur? Qui rerum dolores nam vero?</p>

        <h1>Título 2</h1>
        <p className='paragrafo1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus accusantium animi recusandae ducimus quo eum voluptates nisi officia ad assumenda labore explicabo vitae officiis, laudantium dolorum soluta perferendis quaerat expedita.</p>
      </div>
      <Componente1/>
      {/*CSS inline*/}

      <h1 style={estiloTitulo3}>Título 3</h1>

      <p style={{backgroundColor:'gray',color:'white'}} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus accusantium animi recusandae ducimus quo eum voluptates nisi officia ad assumenda labore explicabo vitae officiis, laudantium dolorum soluta perferendis quaerat expedita.</p>

      <button style={estiloBotao}>Click Aqui</button>

    <p className='primaria'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint culpa, voluptates delectus minus, accusantium facilis est deserunt et aperiam voluptate voluptatum maiores molestias. Tempore corporis explicabo atque dignissimos, deleniti aut.
    </p>
    <Imagens/>

      
      
    </>
  )
}

export default App