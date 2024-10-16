import './Componente1.css'
import styles from './Componente1.module.css'
function Componente1(){
    let nome = 'Adisson'
    // alert('Olá ${nome}, tudo bem?')
    return(
    <>
        <h1> Titulo do Componente 1 </h1>
        <p className={`${styles.primaria} ${styles.fonte}`}> Paragrafo do componente 1 </p>
        <p className={styles.secundaria}> Paragrafo do Componente 1</p>
    
    </>

    )
}

export default Componente1