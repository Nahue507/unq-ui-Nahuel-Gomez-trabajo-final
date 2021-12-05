import './App.css';
import { useEffect, useState } from 'react';
import Tablero from './components/Tablero/Tablero';
//const emojiList = [...'💣🧤🎩🌮🎱🌶🍕🦖'];
import homero from './components/Images/Homero.jpg'
import moe from './components/Images/Moe.jpeg'
import marge from './components/Images/Marge.jpeg'
import lisa from './components/Images/Lisa.png'
import bart from './components/Images/Bart.png'
import flanders from './components/Images/Flanders.png'
import burns from './components/Images/Mr burns.jpeg'
import duff from './components/Images/Mr Duff.jpeg'
const emojiList = [homero,moe,marge,lisa,bart,flanders,burns,duff];

const App = () => {
  const [fichasMezcladas, setFichasMezcladas] = useState([]);
  const [fichaSeleccionada, setFichaSeleccionada] = useState(null);
  //PAra que no pueda elegir si esta la ficha dandose vuelta
  const [animando, setAnimando] = useState(false);

  useEffect( () => {
    const listaFichas = shuffleArray([...emojiList, ...emojiList]);
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
    <Tablero fichas={fichasMezcladas} animating={animando}  handleMemoClick={handleMemoClick} />
  );
}

export default App;