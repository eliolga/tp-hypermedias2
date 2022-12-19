// valeurs disponibles dans le json:
/*{libelleNomsArtistes, titre, dateProduction, categorie, materiaux, dimensions, lieuProduction, cultures, emplacementHorsMurs, provenance, collection, departement, dateAcquisition, numero, oeuvrePrincipale, elements, nomsArtistesTries, artistes, evenements, publications, id}*/

import React, {useState} from "react";
import {Button} from "semantic-ui-react";
import CardExemple from "./CardOeuvre";

const OeuvreAuHasard = (props) => {

   const [uneOeuvre, setUneOeuvre] = useState({})

   let index = Math.floor(Math.random() * props.oeuvres.length);
   const uneOeuvreHandler = () => {
      setUneOeuvre(trouverOeuvreHasard());
   }

   function trouverOeuvreHasard() {
      return props.oeuvres[index];
   }

   return (
      <>

         <Button onClick={uneOeuvreHandler}>Afficher une oeuvre au hasard</Button>
         <div>
            {uneOeuvre.titre !== undefined ? <CardExemple oeuvre={uneOeuvre}/> : undefined}
         </div>

      </>
   )
}
export default OeuvreAuHasard;
