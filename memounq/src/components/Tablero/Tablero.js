import Ficha from "../Fichas/Ficha";
import "./Tablero.css";
import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { listaDeElementos } from "../ListaDeElementos";

const Tablero = () => {
  const { id } = useParams();
  const irA = useNavigate();
  const tamañotablero = "tablero" + id;
  const paresPosibles = (id * id) / 2;
  const imageList = listaDeElementos(paresPosibles);
  const [fichasMezcladas, setFichasMezcladas] = useState([]);
  const [fichaSeleccionada, setFichaSeleccionada] = useState(null);
  const [cantidadDePares,sumarPar] = useState(0);
  //Para que no pueda elegir si esta la ficha dandose vuelta
  const [animando, setAnimando] = useState(false);
   useEffect(()=>{
    if(cantidadDePares == paresPosibles){
      irA("/home")   
    }
   },
   
   [cantidadDePares])


  useEffect(() => {
    const listaFichas = shuffleArray([...imageList, ...imageList]);
    setFichasMezcladas(
      listaFichas.map((emoji, i) => ({ index: i, emoji, flipped: false }))
    );
  }, []);

  const shuffleArray = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const handleMemoClick = (ficha) => {
    const fichaDadaVuelta = { ...ficha, flipped: true };
    let copiaFichasMezcladas = [...fichasMezcladas];
    copiaFichasMezcladas.splice(ficha.index, 1, fichaDadaVuelta);
    setFichasMezcladas(copiaFichasMezcladas);
    if (fichaSeleccionada === null) {
      setFichaSeleccionada(ficha);
    } else if (fichaSeleccionada.emoji === ficha.emoji) {
      setFichaSeleccionada(null);
      sumarPar(cantidadDePares+1);
    } else {
      setAnimando(true);
      setTimeout(() => {
        copiaFichasMezcladas.splice(ficha.index, 1, ficha);
        copiaFichasMezcladas.splice(
          fichaSeleccionada.index,
          1,
          fichaSeleccionada
        );
        setFichasMezcladas(copiaFichasMezcladas);
        setFichaSeleccionada(null);
        setAnimando(false);
      }, 1000);
    }
  };
  return (
    <main className={ `container-fluid ${tamañotablero}`} >
      {fichasMezcladas.map((ficha, i) => {
        return (
          <Ficha
            key={`${i}_${ficha.emoji}`}
            animando={animando}
            handleMemoClick={handleMemoClick}
            ficha={ficha}
            tamañoTablero={id}
          />
        );
      })}
    </main>
  );
};

export default Tablero;
