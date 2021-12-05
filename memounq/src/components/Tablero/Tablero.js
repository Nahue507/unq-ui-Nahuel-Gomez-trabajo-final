import Ficha from '../Fichas/Ficha';
import './Tablero.css';

const Tablero = ({animando, handleMemoClick, fichas}) => {
    return (
        <main className="tablero">
            {fichas.map( (ficha, i) => {
                return <Ficha key={`${i}_${ficha.emoji}`} animando={animando} handleMemoClick={handleMemoClick} ficha={ficha} />
            })}
        </main>
    );
}

export default Tablero;