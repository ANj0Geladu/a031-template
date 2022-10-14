import React from "react";
import "./App.css";
import Garagem from "./componentes/Garagem"
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Aside from "./componentes/Aside"
import RedeSocial from "./componentes/RedeSocial"

export default function App() {
  
  return (
    <div>
      <h1>Aula - Componentes React</h1>
      <Header/>
      <Garagem/>
      <Footer/>
      <Aside/>
      <RedeSocial/>
    </div>
  );
}
