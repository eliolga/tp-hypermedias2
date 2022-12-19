// valeurs disponibles dans le json:
/*{libelleNomsArtistes, titre, dateProduction, categorie, materiaux, dimensions, lieuProduction, cultures, emplacementHorsMurs, provenance, collection, departement, dateAcquisition, numero, oeuvrePrincipale, elements, nomsArtistesTries, artistes, evenements, publications, id}*/

import React, {useEffect, useState} from "react";
import {Button, Container, Input} from "semantic-ui-react";
import CardExemple from "./CardExemple";

const RechercheMusee = (props) => {
	const [titre, setTitre] = useState("");
	var tipit = {};
	const [uneOeuvre, setUneOeuvre] = useState({})
	const uneOeuvreHandler = () => {
		setUneOeuvre(trouverOeuvre());
	}
	useEffect(() =>{
		setTitre(props.titrePasse);
		},[props.titrePasse]
	)


	function trouverOeuvre() {

		props.oeuvres.forEach(function (element) {
			if (element.titre === titre) {

				tipit = element;
			}
		})
		console.log (tipit);
		return (tipit);
	}
	console.log(uneOeuvre);
	return (
		<Container>
			<h1>Recherche</h1>
			<Input type="text" value={titre} onChange={(e) => setTitre(e.target.value)} placeholder="Titre de l'oeuvre"/>

			<Button onClick={uneOeuvreHandler}>Recherche par titre</Button>
			<div>
				{uneOeuvre.titre !== undefined ? <CardExemple oeuvre={uneOeuvre}/> : undefined}
			</div>

		</Container>
	)
}
export default RechercheMusee;
