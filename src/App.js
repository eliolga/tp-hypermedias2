import './App.css';
import React from "react";
import RechercheMusee from "./composants/RechercheMusee";
import MenuExampleAttached from "./composants/Menu";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Accueil from "./composants/Accueil";

export default function App() {

   return (
      <BrowserRouter>
         <h1>MAC</h1>
         <MenuExampleAttached/>

         <Routes>
            <Route path="/" element={<Accueil/>}/>
            <Route path="/Recherche" element={<RechercheMusee/>}/>
         </Routes>

      </BrowserRouter>
   );
}
