import Ficha from '../Fichas/Ficha';
import './Tablero.css';
import { useEffect, useState } from 'react';
import homero from '../Images/Homero.jpg'
import moe from '../Images/Moe.jpeg'
import marge from '../Images/Marge.jpeg'
import lisa from '../Images/Lisa.png'
import bart from '../Images/Bart.png'
import flanders from '../Images/Flanders.png'
import burns from '../Images/Mr burns.jpeg'
import duff from '../Images/Mr Duff.jpeg'

const Tablero = () => {
    const imageList = [homero,moe,marge,lisa,bart,flanders,burns,duff];

    const [fichasMezcladas, setFichasMezcladas] = useState([]);
    const [fichaSeleccionada, setFichaSeleccionada] = useState(null);
    //PAra que no pueda elegir si esta la ficha dandose vuelta
    const [animando, setAnimando] = useState(false);
    
  
    useEffect( () => {
      const listaFichas = shuffleArray([...imageList, ...imageList]);
      setFichasMezcladas(listaFichas.map( (emoji, i) => ({ index: i, emoji, flipped: false}) ));
    }, []);
  
    const shuffleArray = a => {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
  
    const handleMemoClick = ficha => {
      const fichaDadaVuelta = { ...ficha, flipped: true };
      let copiaFichasMezcladas = [...fichasMezcladas];
      copiaFichasMezcladas.splice(ficha.index, 1, fichaDadaVuelta);
      setFichasMezcladas(copiaFichasMezcladas);
      if(fichaSeleccionada === null) {
        setFichaSeleccionada(ficha);
      } else if(fichaSeleccionada.emoji === ficha.emoji) {
        setFichaSeleccionada(null);
      } else {
        setAnimando(true);
        setTimeout(() => {
          copiaFichasMezcladas.splice(ficha.index, 1, ficha);
          copiaFichasMezcladas.splice(fichaSeleccionada.index, 1, fichaSeleccionada);
          setFichasMezcladas(copiaFichasMezcladas);
          setFichaSeleccionada(null);
          setAnimando(false);
        }, 1000);
      }
    }
    return (
        <main className="tablero">
            {fichasMezcladas.map( (ficha, i) => {
                return <Ficha key={`${i}_${ficha.emoji}`} animando={animando} handleMemoClick={handleMemoClick} ficha={ficha} />
            })}
        </main>
    );
}

export default Tablero;