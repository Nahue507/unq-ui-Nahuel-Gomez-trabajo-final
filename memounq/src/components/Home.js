import { useState } from "react";
import { Link } from "react-router-dom";
import logo from './Images/Logo.png'


const Home = () =>{
    
    return (
        
        <>
        <center>
        <h1 className="text-center col-12">Simpsons Memo-Test</h1>
        <div className="mb-2 mt-2 col-12 col-lg-8 col-xl-7">
            <img className="img-fluid"src={logo}/>
        </div>
        <div className="row">
            <h2>Elegi tu tablero</h2>
            <button type="button" className="btn btn-primary position-relative">
                4 x 4
            </button>   
            <button type="button" className="btn btn-primary position-relative">
                6 x 6
            </button>   
            <button type="button" className="btn btn-primary position-relative">
                8 x 8
            </button>   
        </div>
        </center>
            </>
  
    );
}


export default Home;