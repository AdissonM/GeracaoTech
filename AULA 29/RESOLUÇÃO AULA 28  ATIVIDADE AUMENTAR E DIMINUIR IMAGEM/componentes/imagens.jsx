import { useState } from "react"

function Imagens(){

    let [tamanho,setTamanho] = useState(150)

    function aumentar(){
        setTamanho(tamanho+50)
        console.log(tamanho)
    }

    return(
        <>

            <button onClick={aumentar} >Aumentar</button>
            <button onClick={()=>{setTamanho(tamanho - 20);console.log(tamanho)}} >Reduzir
            </button>
            <br/>
            <img src="img1.jpg" alt="" width={`${tamanho}px`}/>
            
            
        </>
    )
}

export default Imagens