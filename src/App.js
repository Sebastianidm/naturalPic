import "./styles.css";
import MyContext from "./Context";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import { useEffect, useState } from "react";

export default function App() {
  const endpoint = "/fotos.json";
  const [api , setApi] = useState([])

  const getFotos = async () => {
    const res = await fetch(endpoint);
    let data = await res.json();
    let datosNecesarios = data.photos.map((e) => ({
      id: e.id,
      src: e.src.tiny,
      desc: e.alt,
      favorito: false

    }));
    setApi(datosNecesarios);
  
    
}

useEffect(() => {
  getFotos();
}, []);


  return (
    <div className="App">
      <MyContext.Provider value={{api , setApi}}>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
        
      </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
