import homero from "./Images/Homero.jpg";
import moe from "./Images/Moe.jpeg";
import marge from "./Images/Marge.jpeg";
import lisa from "./Images/Lisa.png";
import bart from "./Images/Bart.png";
import flanders from "./Images/Flanders.png";
import burns from "./Images/Mr burns.jpeg";
import duff from "./Images/Mr Duff.jpeg";
import abuelo from "./Images/AbueloSimpson.jpeg"
import apu from "./Images/Apu.jpeg"
import ayudanteDeSanta from "./Images/Ayudante de santa.jpg"
import barney from "./Images/barney.jpg"
import carl from "./Images/carl carson.png"
import dally from "./Images/Dally.jpeg"
import edna from "./Images/edna.jpg"
import flanderD from "./Images/Flanders_Diablo.gif"
import frink from "./Images/frink.gif"
import gorgori from "./Images/Gorgori.jpeg"
import historietas from "./Images/Hombre de las historietas.jpg"
import hugo from "./Images/hugo.jpeg"
import lenny from "./Images/Lenny.png"
import loca from "./Images/Loca de los gatos.jpg"
import nelson from "./Images/Nelson.jpg"
import otto from "./Images/Otto.png"
import patty from "./Images/Patty.jpg"
import rod from "./Images/Rod.jpg"
import selma from "./Images/Selma.png"
import skinner from "./Images/Skinner.jpeg"
import todd from "./Images/Todd.png"
import tom from "./Images/Tom.png"
import troy from "./Images/Troy.jpeg"
import willy from "./Images/Willy.jpg"
export const listaDeElementos = (cantidaElementos) => {
  const imageList = [
    homero,
    moe,
    marge,
    lisa,
    bart,
    flanders,
    burns,
    duff,
    abuelo,
    apu,
    ayudanteDeSanta,
    barney,
    carl,
    frink,
    dally,
    edna,
    flanderD,
    gorgori,
    historietas,
    hugo,
    lenny,
    loca,
    nelson,
    otto,
    patty,
    rod,
    selma,
    skinner,
    todd,
    troy,
    tom,
    willy
  ];

  return imageList.slice(0, cantidaElementos);
};
