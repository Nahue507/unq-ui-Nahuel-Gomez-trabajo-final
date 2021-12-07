import Home from "./components/Home";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tablero from './components/Tablero/Tablero';



const App = () => {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/tablero/:id" element={<Tablero />} />
        </Routes>
      </BrowserRouter>
      </div>
    
  );
}

export default App;