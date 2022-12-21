import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
/*
* Ce composant effectue une requête pour obtenir le json de notre API
* Les objets sont chargés dans un tableau. Ensuite, pour faciliter la démonstration, nous affichons un sous ensemble
* d’œuvre comme guidage.
* */
const Accueil = (props) => {

   const [oeuvres, setOeuvres] = useState([]);

//fonction qui effectue la requête à l’api et qui transfert les données dans l’app
   const appelApi = () => {
      fetch('https://www.donneesquebec.ca/recherche/dataset/3b475449-f7e0-4f68-b9e8-933dda1916d0/resource/6e08aa19-4653-411a-ab80-d97d4feaeba5/download/oeuvres-mac.json')
         .then((response) => response.json())
         .then((data) => {
            setOeuvres(data)
         });
   }
// au chargement de la page, on fait la requête à l’api
   useEffect(() => {
      appelApi();
   }, []);


// RenderŒuvre affiche un sous-ensemble de titre des œuvres pour aider l’utilisateur à tester notre app
   const renderOeuvres = () => {
      return oeuvres.map((item) => {

         let path = `/Recherche/${item.numero}`
         if (item.titre.length < 7) {
            return (
               <Link to={path} onClick={() => props.choisirTitre(item.titre)}>{item.titre} / </Link>
            )
         } else return null;
      })
   }
   return (
      <>
         <h1>Sélections rapides pour la recherche</h1>
         {renderOeuvres()}
      </>)
}
export default Accueil
