import { Link,useParams } from "react-router-dom";
import "./PantallaFinal.css"

const PantallaFinal = ()=>{
    const { id } = useParams();
    return(
        <center className="divFinal">
            <h1>GANASTE!!!!!!</h1>
            <div className="row d-flex justify-content-around col-5">

            <Link to={`/tablero/${id}`} className="btn btn-warning col-4">
                    Repetir Tablero
                </Link>
                <Link to="/" className="btn btn-warning col-4">
                    Cambiar Tamaño
                </Link>

            </div>
        </center>
    )

}


export default PantallaFinal;