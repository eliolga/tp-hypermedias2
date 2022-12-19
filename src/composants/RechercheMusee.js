// valeurs disponibles dans le json:
/*{libelleNomsArtistes, titre, dateProduction, categorie, materiaux, dimensions, lieuProduction, cultures, emplacementHorsMurs, provenance, collection, departement, dateAcquisition, numero, oeuvrePrincipale, elements, nomsArtistesTries, artistes, evenements, publications, id}*/

import React, {useEffect, useState} from "react";
import {Button, Container, Input} from "semantic-ui-react";
import CardExemple from "./CardExemple";
/*
* Le composant RechercheMusee Permet de faire la recherche d’un oeuvre du musée d’art contemporain à l’aide de son titre
* Elle affiche une image (si elle est disponible) Son titre, l’année de production les matériaux qui la compose et
* le nom de l’artiste
* */
const RechercheMusee = (props) => {
	const [titre, setTitre] = useState("");
	var oeuvreChoisie = {};
	const [uneOeuvre, setUneOeuvre] = useState({})
	const uneOeuvreHandler = () => {
		setUneOeuvre(trouverOeuvre());
	}
	useEffect(() =>{
		setTitre(props.titrePasse);
		},[props.titrePasse]
	)

	/*Parcourir le tableau d’oeuvre en comparant le titre entré pour retourner l’oeuvre désirée*/
	function trouverOeuvre() {
		props.oeuvres.forEach(function (element) {
			if (element.titre === titre) {
				oeuvreChoisie = element;
			}
		})
		return (oeuvreChoisie);
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
