import { useState } from 'react';
import styles from './Comp1.module.css';

function Comp1() {
    let images = ['Meme1.jpg', 'Meme2.jpg'];
    let images2 = ['Meme2.jpg', 'Meme1.jpg'];

    let [imgAtual, setImgAtual] = useState(images[0]);
    let [imgAt2, setImgAt2] = useState(images2[0]);

    function trocarImagem() {
        if (imgAt2 === images2[0]) {
            setImgAt2(images2[1]);
        } else {
            setImgAt2(images2[0]);
        }
    }

    return (
        <>
            <h2>Principais Hooks</h2>
            <ul className={styles.lista}>
                <li>useState</li>
                <li>useEffect</li>
                <li>useContext</li>
                <li>useReducer</li>
                <li>useMemo</li>
                <li>useCallback</li>
            </ul>

            <h2>useStates</h2>
            <img onClick={() => {
                imgAtual === images[0] ? setImgAtual(images[1]) : setImgAtual(images[0]);
            }} src={imgAtual} alt="a" width={'200px'} />
            <br />
            <img onClick={trocarImagem} src={imgAt2} alt="" />
            <img onClick={() => {
                imgAtual === images[0] ? setImgAtual(images[1]) : setImgAtual(images[0]);
            }} src={imgAtual} alt="" width={'200px'} />
        </>
    );
}

export default Comp1;
