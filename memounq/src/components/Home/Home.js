import { Link } from "react-router-dom";
import logo from '../Images/Logo.png'
import "./Home.css"


const Home = () =>{
    
    return (
        
        <>
        <center className="divPrincipal">
        <h1 className="text-center col-12">Simpsons Memo-Test</h1>
        <div className="mb-2 mt-2 col-12 col-lg-8 col-xl-7">
            <img className="img-fluid"src={logo}/>
        </div>
        <div className="row d-flex justify-content-around col-5">
            <h2>Elegi tu tablero</h2>
           
            
                <Link to="/tablero/4" className="btn btn-primary col-3">
                    4 x 4
                </Link>
                <Link to="/tablero/6" className="btn btn-primary col-3">
                    6 x 6
                </Link>
               <Link to="/tablero/8" className="btn btn-primary col-3">
                 8 x 8
               </Link>
              
        </div>
        </center>
            </>
  
    );
}


export default Home;