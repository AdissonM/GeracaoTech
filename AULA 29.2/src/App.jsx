import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp1 from './componentes/Comp1'

function App() {
  let nome = ''
  let idade = ''
  let profissao = ''

  function carregarDados(){
    nome = document.getElementById('nome').value
    idade = document.getElementById('idade').value
    profisao = document.getElementById('profissao').value
  }

  return (
    <>
    <h1> Titutos </h1>

    <input id= 'nome' type= 'text' placeHolder='digite seu nome'/><br></br>
    <input id= 'idade' type= 'text' placeHolder='digite seu idade'/><br></br>
    <input id= 'profissao' type= 'text' placeHolder='digite seu profissao'/><br></br>
    <button onClick={carregarDados} type='button'> Enviar</button>
    
    
    <Comp1 nome = {nome} idade = 'idade' profissao = {profissao}/>
      
    </>
  )
}

export default App
