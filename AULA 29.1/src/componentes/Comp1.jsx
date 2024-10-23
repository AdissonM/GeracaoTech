import { useState } from 'react'
import styles from './Comp1.module.css'


function Comp1(prop){

 
    let borda1 = {border:"1px solid blue"}
    let borda2 = {border:"1px solid red"}

    let [borda, setBorda] = useState(borda1)

    function alterarBordas() {
        if(borda.border == borda1.border){
            setBorda(borda2)
        }else{
            setBorda(borda1)
        }
    }


 

    return(
        <>
        <p style={borda1}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit fugiat ipsum nam maiores explicabo nihil aperiam praesentium rem recusandae laudantium, molestiae facere laborum assumenda neque vitae dicta. Aspernatur, illum!</p>
        <button onClick={alterarBordas}> Alterar Bordas</button>
        
        
        
        </>
    )
}

export default Comp1