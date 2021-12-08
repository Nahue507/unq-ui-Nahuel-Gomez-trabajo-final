import Home from "./components/Home/Home.js";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tablero from './components/Tablero/Tablero';
import PantallaFinal from "./components/PantallaFinal.js";



const App = () => {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tablero/:id" element={<Tablero />} />
          <Route exact path="/ganaste/:id" element={<PantallaFinal />}/>
        </Routes>
      </BrowserRouter>
      </div>
    
  );
}

export default App;